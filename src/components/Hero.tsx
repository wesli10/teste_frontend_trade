import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="20vh"
    bgGradient="linear(to-l, #DAA520, #F4A460)"
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "MEU TIME",
};
