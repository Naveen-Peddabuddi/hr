import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const RHTextField = ({ variant, label, ...props }) => {
  return (
    <Grid>
      <TextField
        label={label}
        variant={variant || "outlined"}
        fullWidth={true}
        style={
          props.style || { backgroundColor: "white", border: "1px solid white" }
        }
      />
    </Grid>
  );
};
export default RHTextField;
