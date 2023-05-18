import {
  Container as ChakraContainer,
  ContainerProps,
  forwardRef,
} from "@chakra-ui/react";

export const Container = forwardRef<ContainerProps, "div">(function Container(
  props,
  ref
) {
  return (
    <ChakraContainer p="0" py={10} maxW="container.xl" {...props} ref={ref} />
  );
});
