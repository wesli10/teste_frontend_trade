import { api } from "@/lib/axios";
import { Box, Button, FormLabel, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SelectOptionsCountry } from "./SelectOptionsCountry";
import { SelectOptionsSeason } from "./SelectOptionsSeason";
import { FaSearch } from "react-icons/fa";

type DataProps = {
  country: string;
  season: string;
};

export const FormData = () => {
  const router = useRouter();
  const { api_key } = router.query;
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [countryData, setCountryData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [data, setData] = useState<DataProps>({
    country: "",
    season: "",
  });

  const handleSelectedCountry = (value: string) => {
    setData((prev) => ({
      ...prev,
      country: value,
    }));
  };

  const handleSelectedSeason = (value: string) => {
    setData((prev) => ({
      ...prev,
      season: value,
    }));
  };

  useEffect(() => {
    if (!api_key && router.pathname === "/home") {
      router.push("/auth");
    }
  }, [api_key, router]);

  useEffect(() => {
    api
      .get("/countries", {
        headers: {
          "x-rapidapi-key": api_key,
        },
      })
      .then((response) => setCountryData(response.data.response));

    api
      .get("/leagues/seasons", {
        headers: {
          "x-rapidapi-key": api_key,
        },
      })
      .then((response) => setSeasonData(response.data.response));
  }, [api_key]);

  useEffect(() => {
    if (data.country !== "" && data.season !== "") {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [data]);

  async function handleForm() {
    try {
      router.push({
        pathname: "/leagues",
        query: { api_key: api_key, country: data.country, season: data.season },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box
        borderRadius={20}
        justifyContent="center"
        w={"xl"}
        boxShadow={"2xl"}
        margin={5}
        p={6}
        bg={"blackAlpha.400"}
      >
        <Stack spacing={2}>
          <FormLabel color="orange">Countries: </FormLabel>
          <SelectOptionsCountry
            onSelectChanged={handleSelectedCountry}
            contries={countryData}
            placeholder="Select Country"
          />
          <FormLabel color="orange">Seasons: </FormLabel>
          <SelectOptionsSeason
            onSelectChanged={handleSelectedSeason}
            seasons={seasonData}
            placeholder="Select Season"
          />
        </Stack>

        <Button
          onClick={handleForm}
          leftIcon={<FaSearch />}
          colorScheme="orange"
          variant="solid"
          isDisabled={isDisable}
          mt={12}
          w="full"
        >
          Search Leagues
        </Button>
      </Box>
    </>
  );
};
