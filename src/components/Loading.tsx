import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => (
  <Flex
    w="100%"
    h="100%"
    align="center"
    marginTop="20%"
    justify="center"
    flex={1}
    data-testid="loading-app"
  >
    <Spinner thickness="3px" color="orange.800" size="xl" />
  </Flex>
);

export default Loading;
