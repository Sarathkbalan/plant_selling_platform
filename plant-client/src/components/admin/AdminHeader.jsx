import { Flex, Heading, Button } from "@chakra-ui/react";

function AdminHeader({
  title,
  buttonText,
  onClick,
}) {
  return (
    <Flex
      justify="space-between"
      align="center"
      mb={6}
    >
      <Heading size="lg">{title}</Heading>

      {buttonText && (
        <Button
          colorScheme="green"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </Flex>
  );
}

export default AdminHeader;