import {
  Box,
  Heading,
} from "@chakra-ui/react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    Revenue: 4000,
    Stock: 2400,
  },
  {
    month: "Feb",
    Revenue: 3000,
    Stock: 2210,
  },
  {
    month: "Mar",
    Revenue: 5000,
    Stock: 2290,
  },
  {
    month: "Apr",
    Revenue: 7000,
    Stock: 2000,
  },
  {
    month: "May",
    Revenue: 9000,
    Stock: 2181,
  },
  {
    month: "Jun",
    Revenue: 6500,
    Stock: 2500,
  },
];

export default function SalesChart() {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="20px"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0 8px 25px rgba(0,0,0,.05)"
      h="400px"
    >
      <Heading
        size="md"
        // mb={1}
      >
        Growth Trends
      </Heading>

      <Box
        color="gray.500"
        mb={5}
      >
        Quarterly revenue vs plant acquisition.
      </Box>

      <ResponsiveContainer
        width="100%"
        height="85%"
      >
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="Revenue"
            fill="#166534"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="Stock"
            fill="#E5E5E5"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}