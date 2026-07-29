import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

function DashboardCard({ title, value, icon, color }) {
  return (
    <Box
      bg="gray.100"
      p={5}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.400"
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text color="gray.500" fontSize="xl" mb={2}>
            {title}
          </Text>

          <Heading size="lg" color={color}>{value}</Heading>
        </Box>

        <Icon
          as={icon}
          boxSize={10}
          color={color}
        />
      </Flex>
    </Box>
  );
}

export default DashboardCard;