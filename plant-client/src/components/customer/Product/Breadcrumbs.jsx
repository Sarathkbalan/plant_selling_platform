import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function Breadcrumbs({ plant }) {
  if (!plant) return null;

  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.400" />}
      fontSize="sm"
      color="gray.500"
      mb={6}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          as={RouterLink}
          to="/"
          _hover={{
            color: "green.600",
            textDecoration: "none",
          }}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          as={RouterLink}
          to="/plants"
          _hover={{
            color: "green.600",
            textDecoration: "none",
          }}
        >
          {plant.category?.name || "Plants"}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Text
          color="gray.700"
          fontWeight="medium"
        >
          {plant.name}
        </Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Breadcrumbs;