import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RHTextField from "../components/common/RHTextfield";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  rootPaper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
  spacing: {
    padding: theme.spacing(2),
    // marginBlockStart:'10px'
  },
  paper: {
    padding: theme.spacing(3),
  },
  spacing1: {
    // padding: theme.spacing(5),
  },
  circle: {
    paddingBlock: theme.spacing(2),
  },

  title: {
    paddingBlockEnd: theme.spacing(3),
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid>
        <Grid className={classes.spacing}>
          <RHTextField label={"name"} />
        </Grid>
        <Grid>
          <RHTextField label={"email"} />
        </Grid>
        <Grid className={classes.spacing}>
          <RHTextField label={"password"} />
        </Grid>
        <Grid>
          <RHTextField label={"confirm password"} />
        </Grid>
        <Grid className={classes.spacing}>
          <Button variant="outlined">Create Account</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
