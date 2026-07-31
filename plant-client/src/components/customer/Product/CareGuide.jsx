import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function CareGuide() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      borderWidth="1px"
    >
      <Heading color="green.700" size="md" mb={5}>
        Plant Care Guide
      </Heading>

      <List spacing={3}>
        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color="green.500"
          />
          Water twice a week.
        </ListItem>

        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color="green.500"
          />
          Keep in indirect sunlight.
        </ListItem>

        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color="green.500"
          />
          Use organic fertilizer every month.
        </ListItem>

        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color="green.500"
          />
          Maintain room temperature between 20°C–30°C.
        </ListItem>

        <ListItem>
          <ListIcon
            as={CheckCircleIcon}
            color="green.500"
          />
          Repot once every year.
        </ListItem>
      </List>
    </Box>
  );
}

export default CareGuide;