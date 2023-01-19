import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Audit = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      onSubmit={() => {
        navigate("/");
      }}
    >
      <Box sx={{ padding: "15px" }}>
        <div>Stability</div>
        <TextField
          id="standard-number"
          label="Number of bugs / week"
          type="number"
          variant="standard"
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
