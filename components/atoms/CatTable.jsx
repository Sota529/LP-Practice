import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";

const CatTable = () => {
  return (
    <Box w={{ base: "100%", md: "60%" }} mx="auto" shadow="lg" borderRadius="">
      <Table p="2em">
        <TableCaption>猫っていつがベストなの？</TableCaption>
        <Thead bg="blue.200">
          <Tr>
            <Th color="white" fontSize={{ base: "18px", md: "24px" }}>
              季節
            </Th>
            <Th color="white" fontSize={{ base: "18px", md: "24px" }}>
              猫の状態
            </Th>
            <Th color="white" fontSize={{ base: "18px", md: "24px" }}>
              可愛さ
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>春</Td>
            <Td>(≧∇≦)b</Td>
            <Td>∞</Td>
          </Tr>
          <Tr>
            <Td>夏</Td>
            <Td>(≧∇≦)b</Td>
            <Td>∞</Td>
          </Tr>
          <Tr>
            <Td>秋</Td>
            <Td>(≧∇≦)b</Td>
            <Td>∞</Td>
          </Tr>
          <Tr>
            <Td>冬</Td>
            <Td>(≧∇≦)b</Td>
            <Td>∞</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
export default CatTable;
