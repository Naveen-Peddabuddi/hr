import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const RHTextField = ({ variant, label }) => {
  return (
    <Grid>
      <TextField label={label} variant={variant || "outlined"} />
    </Grid>
  );
};
export default RHTextField;
