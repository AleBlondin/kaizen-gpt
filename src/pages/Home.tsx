import { Link } from "@mui/material";
import AuditResultTable from "../components/AuditResultTable";
import { GobalAuditResult } from "../types/audit";

type HomeProps = {
  auditResults: string;
};

const Home = ({ auditResults }: HomeProps) => {
  return (
    <div>
      <AuditResultTable content={JSON.parse(auditResults)} />
      <Link href="/audit">Start a new 3S audit</Link>
    </div>
  );
};

export default Home;
