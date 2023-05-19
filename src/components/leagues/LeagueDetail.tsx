import { Box, Image, Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface LeagueProps {
  leagueName: string;
  leagueType: string;
  LeagueLogo: string;
  leagueId: number;
  countryName: string;
  seasonYear: number;
  countryFlag?: string;
  api: string | string[] | undefined;
}

export function LeagueDetail(props: LeagueProps) {
  const router = useRouter();

  function handleClick() {
    router.push({
      pathname: "/teams",
      query: {
        api_key: props.api,
        league: props.leagueId,
        season: props.seasonYear,
        country: props.countryName,
      },
    });
  }

  return (
    <Box
      _hover={{
        cursor: "pointer",
        borderColor: "orange.200",
      }}
      borderRadius={30}
      display="inline-grid"
      margin={5}
      border="2px"
      onClick={handleClick}
    >
      <Box
        display="flow"
        justifyContent="center"
        w={"2xs"}
        borderRadius={30}
        bg={"blackAlpha.300"}
        p={6}
      >
        <Box boxSize="110px" display="flex" justifyContent="center" w="full">
          <Image objectFit="cover" src={props.LeagueLogo} alt="League Logo" />
        </Box>
        <Box fontWeight="medium" w="full" mt={7}>
          <Divider orientation="horizontal" />
          <Text color={"orange.200"}>Name: {props.leagueName}</Text>
          <Text color={"orange.200"}>Type: {props.leagueType}</Text>
          <Text color={"orange.200"}>Country: {props.countryName}</Text>
        </Box>
      </Box>
    </Box>
  );
}
