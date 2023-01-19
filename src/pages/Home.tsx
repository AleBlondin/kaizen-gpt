import { Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuditContext } from "../App";

const Home = () => {
  //@ts-ignore
  const { audits } = useContext(AuditContext);

  const retrievedBugs = localStorage.getItem("bugs");

  const calculateScore = (bugs) => {
    if (bugs === 0) return 10;
    if (bugs <= 2) return 8;
    if (bugs <= 4) return 6;
    return 0;
  };

  return (
    <div>
      <Link href="/audit">Start a new 3S audit</Link>
      <Table>
        <TableBody>
          {audits.map((audit) => (
            <TableRow key={audit.date}>
              <TableCell>{audit.date}</TableCell>
              <TableCell>{calculateScore(audit.bugs)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
