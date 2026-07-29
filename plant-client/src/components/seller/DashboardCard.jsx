import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  Icon,
} from "@chakra-ui/react";

export default function DashboardCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  badge,
}) {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="20px"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0 8px 25px rgba(0,0,0,0.05)"
      transition=".25s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
      }}
    >
      <Flex justify="space-between">
        <Flex
          w="48px"
          h="48px"
          bg={iconBg}
          borderRadius="16px"
          align="center"
          justify="center"
          color="#0db972"
        >
          <Icon
            as={icon}
            boxSize={6}
            color={iconColor}
          />
        </Flex>

        <Badge
          colorScheme="green"
          borderRadius="full"
          px={3}
          py={1}
        >
          {badge}
        </Badge>
      </Flex>

      <Text
        color="gray.500"
        fontSize="sm"
      >
        {title}
      </Text>

      <Heading
        // mt={2}
        size="lg"
        color="#0db972"
      >
        {value}
      </Heading>
    </Box>
  );
}