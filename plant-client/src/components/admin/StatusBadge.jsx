import { Badge } from "@chakra-ui/react";

function StatusBadge({ status }) {
  const color =
    status === "Approved"
      ? "green"
      : status === "Pending"
      ? "orange"
      : status === "Rejected"
      ? "red"
      : status === "Active"
      ? "green"
      : status === "Blocked"
      ? "red"
      : "gray";

  return (
    <Badge colorScheme={color}>
      {status}
    </Badge>
  );
}

export default StatusBadge;