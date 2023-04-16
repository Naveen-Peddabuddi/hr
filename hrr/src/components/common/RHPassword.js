import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const RHPassword = ({ label, ...props }) => {
  return (
    <Grid>
      <TextField
        label={label}
        type="password"
        style={props.style}
        fullWidth={true}
      />
    </Grid>
  );
};
export default RHPassword;
