import { Grid } from "@mui/material";
import RHTextField from "../components/common/RHTextfield";

const Login = () => {
  return (
    <>
      <Grid>
        <RHTextField label={"firstName"} variant="standard" />
      </Grid>
      <Grid>
        <RHTextField label={"lastName"} variant="filled" />
      </Grid>
    </>
  );
};

export default Login;
