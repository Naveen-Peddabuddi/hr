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
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: "#131324",
    color: "white",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    borderRadius: "2%",
  },
  inputGrid: {
    paddingBottom: theme.spacing(2),
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={10}
        lg={4}
        md={6}
        className={classes.container1}
      >
        <Grid item xs={11} lg={11} md={11} className={classes.inputGrid}>
          <RHTextField label={"email"} />
        </Grid>
        <Grid item xs={11} lg={11} md={11} className={classes.inputGrid}>
          <RHPassword
            label={"password"}
            type="password"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid
          item
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={11}
          lg={11}
          md={11}
          className={classes.inputGrid}
        >
          <Button
            fullWidth={true}
            variant="outlined"
            style={{ color: "white", border: "1px solid white" }}
          >
            Create Account
          </Button>
        </Grid>
        <Grid item xs={11} lg={11} md={11} className={classes.inputGrid}>
          <Typography
            align="center"
            style={{ fontSize: "10px", letterSpacing: "1px" }}
          >
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
