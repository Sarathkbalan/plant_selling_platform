import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Pencil, Trash2 } from "lucide-react";

export default function DataTable({
  columns,
  data,
  actions,
}) {
  return (
    <Table variant="simple">
      <Thead bg="green.100">
        <Tr>
          {columns.map((column) => (
            <Th key={column.accessor || column.header}>
              {column.header}
            </Th>
          ))}

          {actions && <Th textAlign="center">Actions</Th>}
        </Tr>
      </Thead>

      <Tbody>
        {data.map((row) => (
          <Tr key={row.id} color="green.600">
            {columns.map((column) => (
              <Td key={column.accessor || column.header}>
                {column.Cell
                  ? column.Cell(row)
                  : column.accessor === "imageUrl"
                  ? (
                    <Image
                      src={`http://localhost:5078${row.imageUrl}`}
                      alt={row.name}
                      boxSize="70px"
                      objectFit="cover"
                      borderRadius="md"
                      fallbackSrc="https://via.placeholder.com/70"
                    />
                  )
                  : row[column.accessor]}
              </Td>
            ))}

            {actions && (
              <Td textAlign="center">
                <HStack justify="center" spacing={2}>
                  <IconButton
                    aria-label="Edit"
                    icon={<Pencil size={18} />}
                    colorScheme="blue"
                    size="sm"
                    onClick={() => actions.onEdit(row)}
                  />

                  <IconButton
                    aria-label="Delete"
                    icon={<Trash2 size={18} />}
                    colorScheme="red"
                    size="sm"
                    onClick={() => actions.onDelete(row)}
                  />
                </HStack>
              </Td>
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}