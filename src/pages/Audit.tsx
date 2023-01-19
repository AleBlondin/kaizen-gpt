import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GobalAuditResult } from "../types/audit";

type HomeProps = {
    addResult: (newResult: GobalAuditResult) => void;
};

const Audit = ({ addResult }: HomeProps) => {
  const navigate = useNavigate();

  const [stabilityScore, setStabilityScore] = useState<number | null>(null);

  return (
    <Box
      component="form"
      onSubmit={() => {
        if (stabilityScore == null) {
            return;
        }

        const newAuditResult: GobalAuditResult = {
          date: new Date().toUTCString(),
          stabilityScore,
        };
        addResult(newAuditResult);
        navigate("/");
      }}
    >
      <Box sx={{ padding: "15px" }}>
        <div>Stability</div>
        <TextField
          required
          id="standard-number"
          label="Number of bugs / week"
          type="number"
          variant="standard"
          InputProps={{ inputProps: { min: 0 } }}
          value={stabilityScore}
          onChange={(value) => {
            setStabilityScore(Number(value.target.value));
          }}
        />
      </Box>
      <Button sx={{ marginTop: "30px" }} type="submit">
        Submit audit
      </Button>
    </Box>
  );
};

export default Audit;
