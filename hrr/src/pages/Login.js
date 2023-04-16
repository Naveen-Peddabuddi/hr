import { Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RHTextField from "../components/common/RHTextfield";
import { Link } from "react-router-dom";
import RHPassword from "../components/common/RHPassword";

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
    backgroundColor: "#131324",
    color: "white",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    borderRadius: "2%",
  },
  input: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rootPaper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid container xs={6} lg={4} className={classes.container1}>
        <Grid item xs={12} className={classes.input}>
          <RHTextField label={"email"} />
        </Grid>
        <Grid item xs={12} lg={12} className={classes.input}>
          <RHPassword
            label={"password"}
            type="password"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.input}>
          <Button
            variant="outlined"
            style={{ color: "white", border: "1px solid white" }}
          >
            Create Account
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.input}>
          <Typography style={{ fontSize: "10px", letterSpacing: "1px" }}>
            {`DON'T HAVE AN ACCOUNT? `}
            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <Link to="/register">Register</Link>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
