import React from "react";
import { Typography, makeStyles, Box, Grid } from "@material-ui/core";
import CoachProfile from "../components/CoachProfile/CoachProfile";
import person from '../static/person'


const useStyle = makeStyles((theme) => ({
  section1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width:"100%",
    alignItems: "center",
    margin: "60px 20px 0px 20px",
    paddingBottom: "90px",
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "row",
      margin: "75px 20px 0px 20px",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      margin: "90px 20px 0px 20px",
    },
  },
  desc1: {
    fontFamily: "Poppins",
    fontSize: "0.6rem",
    letterSpacing: "0.25rem",
    color: "#717070",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  desc2: {
    fontFamily: "Poppins",
    fontSize: "1.6rem",
    lineHeight: "45px",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.9rem",
      lineHeight: "50px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.2rem",
      lineHeight: "55px",
    },
  },
  box: {
    maxWidth: "250px",
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "500px",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontSize: "0.9rem",
    lineHeight: "22px",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1rem",
      lineHeight: "25px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
      lineHeight: "28px",
    },
  },
  section2:{
      margin:"0px 20px 50px 0px"
  }
}));

const Coaches = () => {
  const classes = useStyle();
  return (
    <div id="coaches">
      <div className={classes.section1}>
        <div>
          <Typography variant="h6" className={classes.desc1}>
            MAKE YOUR DREAMS COME TRUE
          </Typography>
          <Typography variant="h4" className={classes.desc2}>
            Find the best chess
            <br />
            coach.
          </Typography>
        </div>
        <Box className={classes.box}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            diam risus nulla quis tempor donec. Nunc diam ac tempus, nunc.
            Cursus eu consectetur diam non eget orci id amet nulla. Sodales
            velit mi netus placerat.
          </Typography>
        </Box>
      </div>
      <Grid container spacing={3} className={classes.section2}>
        <Grid item xs={6} sm={4} md={3}>
          <CoachProfile person={person[0]}/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CoachProfile person={person[1]}/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CoachProfile person={person[2]}/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CoachProfile person={person[3]}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Coaches;
