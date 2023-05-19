import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface TeamProps {
  teamName: string;
  teamId: number;
  teamCountry: string;
  teamLogo: string;
  teamLeague: string | string[] | undefined;
  venueName: string;
  venueCity?: string;
  venueCapacity?: string;
  api: string | string[] | undefined;
}

export function TeamDetail(props: TeamProps) {
  const router = useRouter();
  const { season } = router.query;

  function handleClick() {
    router.push({
      pathname: "/statistics",
      query: {
        api_key: props.api,
        teamId: props.teamId,
        teamName: props.teamName,
        leagueId: props.teamLeague,
        season: season,
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
        <Box boxSize="120px" display="flex" justifyContent="center" w="full">
          <Image objectFit="cover" src={props.teamLogo} alt="League Logo" />
        </Box>
        <Box fontWeight="medium" w="full" mt={7}>
          <Divider orientation="horizontal" />
          <Text color={"orange.200"}>Name: {props.teamName}</Text>
          <Text color={"orange.200"}>Country: {props.teamCountry}</Text>
        </Box>
      </Box>
    </Box>
  );
}
