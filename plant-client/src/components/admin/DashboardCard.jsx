
import {
  Box,
  Flex,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  color,
  bg,
}) {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
      shadow="md"
      transition=".3s"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
      }}
    >
      <Flex justify="space-between" mb={2}>
        <Flex
          h="45px"
          w="45px"
          rounded="full"
          bg={bg}
          align="center"
          justify="center"
        >
          <Icon
            as={icon}
            color={color}
            boxSize={6}
          />
        </Flex>

        <Text
          bg={bg}
          color={color}
          px={3}
          py={1}
          rounded="full"
          fontSize="sm"
        >
          {subtitle}
        </Text>
      </Flex>

      <Text color="gray.500">{title}</Text>

      <Heading mt={2}>{value}</Heading>
    </Box>
  );
}