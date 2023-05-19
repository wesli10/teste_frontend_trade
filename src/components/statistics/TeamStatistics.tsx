import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface TeamStatisticsProps {
  formation: string;
  totalPlayed: number;
  wins: number;
  loses: number;
  draws: number;
}

export function TeamStatistics(props: TeamStatisticsProps) {
  return (
    <TableContainer>
      <Table variant="striped" color="white" fontWeight="semibold">
        <TableCaption>Games Statistics</TableCaption>
        <Tbody>
          <Tr fontSize={"2xl"}>
            <Td>Most used formation in the season:</Td>
            <Td isNumeric>{props.formation}</Td>
          </Tr>
          <Tr fontSize={"2xl"}>
            <Td>Total of Games:</Td>
            <Td isNumeric>{props.totalPlayed}</Td>
          </Tr>
          <Tr>
            <Td>Wins:</Td>
            <Td isNumeric>{props.wins}</Td>
          </Tr>
          <Tr>
            <Td>Loses:</Td>
            <Td isNumeric>{props.loses}</Td>
          </Tr>
          <Tr>
            <Td>Draws:</Td>
            <Td isNumeric>{props.draws}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
