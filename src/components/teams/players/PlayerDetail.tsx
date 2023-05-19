import { Box, Divider, Image, Text } from "@chakra-ui/react";

interface PlayerProps {
  age: number;
  name: string;
  nationality: string;
  photo: string;
}

export function PlayerDetail(props: PlayerProps) {
  return (
    <Box
      _hover={{
        cursor: "pointer",
        borderColor: "orange.200",
      }}
      borderRadius={30}
      display="inline-grid"
      margin={4}
      border="2px"
    >
      <Box
        display="grid"
        justifyContent="center"
        w={"2xs"}
        borderRadius={30}
        bg={"blackAlpha.300"}
        p={3}
      >
        <Box boxSize="90px" display="flex" justifyContent="center" w="full">
          <Image objectFit="cover" src={props.photo} alt="Player Photo" />
        </Box>
        <Box fontWeight="medium" w="full" mt={7}>
          <Divider orientation="horizontal" />
          <Text color={"orange.200"}>Name: {props.name}</Text>
          <Text color={"orange.200"}>Age: {props.age}</Text>
          <Text color={"orange.200"}>Nationality: {props.nationality}</Text>
        </Box>
      </Box>
    </Box>
  );
}
