/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@/components/Container";
import { PlayerDetail } from "@/components/teams/players/PlayerDetail";
import { api } from "@/lib/axios";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { TeamStatistics } from "./TeamStatistics";
import { Graph } from "./Graph";

interface StatisticsProps {
  api_key: string | string[] | undefined;
  teamId: number;
  teamName: string;
  season: string | string[] | undefined;
  leagueId: string | string[] | undefined;
}

interface PlayersProps {
  player: {
    id: number;
    name: string;
    age: number;
    nationality: string;
    photo: string;
  };
}

interface TeamStatisticsProps {
  fixtures: {
    played: {
      total: number;
    };
    wins: {
      total: number;
    };
    loses: {
      total: number;
    };
    draw: {
      total: number;
    };
  };
  lineups: [
    {
      formation: string;
      played: number;
    }
  ];
  goals: {
    for: {
      minute: {
        "0-15": {
          total: number;
          percentage: string;
        };
        "16-30": {
          total: number;
          percentage: string;
        };
        "31-45": {
          total: number;
          percentage: string;
        };
        "46-60": {
          total: number;
          percentage: string;
        };
        "61-75": {
          total: number;
          percentage: string;
        };
        "76-90": {
          total: number;
          percentage: string;
        };
        "91-105": {
          total: number;
          percentage: string;
        };
        "106-120": {
          total: number;
          percentage: string;
        };
      };
    };
  };
}

export default function Statistics() {
  const [players, setPlayers] = useState<Array<PlayersProps>>();
  const [TeamStatisticsData, setTeamStatistics] =
    useState<TeamStatisticsProps>();

  const router = useRouter();

  const { api_key, leagueId, season, teamId, teamName } = router.query;

  useEffect(() => {
    const fetchPlayers = async () => {
      api
        .get("/players", {
          params: {
            team: teamId,
            season: season,
          },
          headers: {
            "x-rapidapi-key": api_key,
          },
        })
        .then((response) => setPlayers(response.data.response))
        .catch((error) => console.log(error));

      const options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
        params: {
          league: leagueId,
          season: season,
          team: teamId,
        },
        headers: {
          "X-RapidAPI-Key": api_key,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await api.request(options);
        setTeamStatistics(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      <Container>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="20vh"
          bgGradient="linear(to-l, #DAA520, #F4A460)"
          bgClip="text"
        >
          <Heading fontSize="3vw">{teamName}</Heading>
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
          <Tabs>
            <TabList color="orange.200" fontWeight="extrabold">
              <Tab fontSize="2xl" w="full">
                Players
              </Tab>
              <Tab fontSize="2xl" w="full">
                Statistics
              </Tab>
              <Tab fontSize="2xl" w="full">
                Goals Graphis
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {players?.map((player) => (
                  <PlayerDetail
                    key={player.player.id}
                    age={player.player.age}
                    name={player.player.name}
                    nationality={player.player.nationality}
                    photo={player.player.photo}
                  />
                ))}
              </TabPanel>
              <TabPanel>
                <TeamStatistics
                  key={""}
                  formation={TeamStatisticsData?.lineups[0].formation || ""}
                  draws={TeamStatisticsData?.fixtures?.draw?.total || 0}
                  loses={TeamStatisticsData?.fixtures?.loses?.total || 0}
                  wins={TeamStatisticsData?.fixtures?.wins?.total || 0}
                  totalPlayed={TeamStatisticsData?.fixtures?.played?.total || 0}
                />
              </TabPanel>
              <TabPanel>
                <Graph
                  valuePorcentage1={
                    TeamStatisticsData?.goals.for.minute["0-15"].percentage ||
                    ""
                  }
                  valuePorcentage2={
                    TeamStatisticsData?.goals.for.minute["16-30"].percentage ||
                    ""
                  }
                  valuePorcentage3={
                    TeamStatisticsData?.goals.for.minute["31-45"].percentage ||
                    ""
                  }
                  valuePorcentage4={
                    TeamStatisticsData?.goals.for.minute["46-60"].percentage ||
                    ""
                  }
                  valuePorcentage5={
                    TeamStatisticsData?.goals.for.minute["61-75"].percentage ||
                    ""
                  }
                  valuePorcentage6={
                    TeamStatisticsData?.goals.for.minute["76-90"].percentage ||
                    ""
                  }
                  valuePorcentage7={
                    TeamStatisticsData?.goals.for.minute["91-105"].percentage ||
                    ""
                  }
                  valuePorcentage8={
                    TeamStatisticsData?.goals.for.minute["106-120"]
                      .percentage || ""
                  }
                  valueTotal1={
                    TeamStatisticsData?.goals.for.minute["0-15"].total || 0
                  }
                  valueTotal2={
                    TeamStatisticsData?.goals.for.minute["16-30"].total || 0
                  }
                  valueTotal3={
                    TeamStatisticsData?.goals.for.minute["31-45"].total || 0
                  }
                  valueTotal4={
                    TeamStatisticsData?.goals.for.minute["46-60"].total || 0
                  }
                  valueTotal5={
                    TeamStatisticsData?.goals.for.minute["61-75"].total || 0
                  }
                  valueTotal6={
                    TeamStatisticsData?.goals.for.minute["76-90"].total || 0
                  }
                  valueTotal7={
                    TeamStatisticsData?.goals.for.minute["91-105"].total || 0
                  }
                  valueTotal8={
                    TeamStatisticsData?.goals.for.minute["106-120"].total || 0
                  }
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}
