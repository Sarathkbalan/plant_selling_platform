import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

function DataTable({
  columns,
  data,
  actions,
}) {
  return (
    <Table
      variant="simple"
      bg="white"
      borderRadius="lg"
    >
      <Thead>
        <Tr>
          {columns.map((col) => (
            <Th key={col.accessor}>
              {col.header}
            </Th>
          ))}

          {actions && <Th>Actions</Th>}
        </Tr>
      </Thead>

      <Tbody>
        {data.map((row) => (
          <Tr key={row.id}>
            {columns.map((col) => (
              <Td color="gray.600" key={col.accessor}>
                {row[col.accessor]}
              </Td>
            ))}

            {actions && (
              <Td>
                <Button
                  size="sm"
                  colorScheme="blue"
                  mr={2}
                  onClick={() => actions.onEdit(row)}
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => actions.onDelete(row)}
                >
                  Delete
                </Button>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default DataTable;