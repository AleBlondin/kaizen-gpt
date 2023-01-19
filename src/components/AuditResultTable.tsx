import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { GobalAuditResult } from "../types/audit";

type AuditResultTableProps = { content: GobalAuditResult[] };

const AuditResultTable = ({ content }: AuditResultTableProps) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Stablity score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {content.map((row) => (
          <TableRow
            key={row.date}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.date}
            </TableCell>
            <TableCell>{row.stabilityScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AuditResultTable;
