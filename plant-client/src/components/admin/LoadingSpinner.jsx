import {
  Center,
  Spinner,
} from "@chakra-ui/react";

function LoadingSpinner() {
  return (
    <Center py={20}>
      <Spinner
        size="xl"
        color="green.500"
        thickness="4px"
      />
    </Center>
  );
}

export default LoadingSpinner;