/* eslint-disable react-hooks/exhaustive-deps */
import { api } from "@/lib/axios";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LeagueDetail } from "./LeagueDetail";

interface LeagueDataProps {
  country: {
    code: string;
    flag: string;
    name: string;
  };
  league: {
    id: number;
    logo: string;
    name: string;
    type: string;
  };
  seasons: [
    {
      year: number;
    }
  ];
}

export function Leagues() {
  const router = useRouter();
  const { api_key, country, season } = router.query;
  const [leagues, setLeagues] = useState<Array<LeagueDataProps>>();

  useEffect(() => {
    if (!api_key) {
      router.push("/auth");
    }
  }, [api_key, router]);

  useEffect(() => {
    api
      .get("/leagues", {
        params: { season: season, country: country },
        headers: {
          "x-rapidapi-key": api_key,
        },
      })
      .then((response) => setLeagues(response.data.response))
      .catch((error) => console.log(error));
  }, [api_key]);

  console.log(leagues);

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="20vh"
        bgGradient="linear(to-l, #DAA520, #F4A460)"
        bgClip="text"
      >
        <Heading fontSize="4vw">Leagues</Heading>
      </Flex>
      <Box
        borderRadius={20}
        border="2px"
        borderColor="orange.400"
        justifyContent="center"
        w={"7xl"}
        boxShadow={"2xl"}
        margin={5}
        p={6}
        bg={"blackAlpha.400"}
      >
        {leagues?.map((league) => (
          <LeagueDetail
            key={league.league.id}
            seasonYear={league.seasons["0"].year}
            leagueId={league.league.id}
            LeagueLogo={league.league.logo}
            leagueName={league.league.name}
            countryName={league.country.name}
            api={api_key}
            leagueType={league.league.type}
          />
        ))}
      </Box>
    </>
  );
}
