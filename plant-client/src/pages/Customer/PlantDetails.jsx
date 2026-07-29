import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function PlantDetails() {
  const { id } = useParams();

  return (
    <Box p={6}>
      <Heading mb={4}>Plant Details</Heading>
      <Text>Plant ID: {id}</Text>
    </Box>
  );
}

export default PlantDetails;