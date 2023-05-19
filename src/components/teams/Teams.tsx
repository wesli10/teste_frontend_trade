import { api } from "@/lib/axios";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TeamDetail } from "./TeamDetail";

interface TeamsDataProps {
  team: {
    id: number;
    name: string;
    country: string;
    logo: string;
  };
  venue: {
    name: string;
    city: string;
    capacity: string;
  };
}

export function Teams() {
  const router = useRouter();
  const { api_key, country, season, league } = router.query;
  const [Teams, setTeams] = useState<Array<TeamsDataProps>>();

  useEffect(() => {
    if (!api_key) {
      router.push("/auth");
    }
  }, [api_key, router]);

  useEffect(() => {
    api
      .get("/teams", {
        params: { league: league, season: season, country: country },
        headers: {
          "x-rapidapi-key": api_key,
        },
      })
      .then((response) => setTeams(response.data.response))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api_key]);

  console.log(Teams);

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="20vh"
        bgGradient="linear(to-l, #DAA520, #F4A460)"
        bgClip="text"
      >
        <Heading fontSize="4vw">Teams</Heading>
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
        {Teams?.map((team) => (
          <TeamDetail
            key={team.team.id}
            teamCountry={team.team.country}
            teamName={team.team.name}
            teamLogo={team.team.logo}
            venueName={team.venue.name}
            teamId={team.team.id}
            api={api_key}
          />
        ))}
      </Box>
    </>
  );
}
