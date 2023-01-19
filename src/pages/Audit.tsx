import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuditContext } from "../App";

const Audit = () => {
  //@ts-ignore
  const { audits, setAudits } = useContext(AuditContext);

  const navigate = useNavigate();

  const existingBugs = JSON.parse(localStorage.getItem("bugs")) || [];
  console.log("existingBugs", existingBugs);
  const handleSubmit = (e) => {
    const bugs = e.target[0].value;
    console.log("bugs", bugs);

    // const allBugs = [...existingBugs, bugs];
    // localStorage.setItem("bugs", JSON.stringify(allBugs));

    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ padding: "15px" }}>
        <div>Stability</div>
        <TextField
          id="standard-number"
          label="Number of bugs / week"
          type="number"
          variant="standard"
          required
          InputProps={{ inputProps: { min: 0 } }}
        />
      </Box>
      <Button sx={{ marginTop: "30px" }} type="submit">
        Submit audit
      </Button>
    </Box>
  );
};

export default Audit;
