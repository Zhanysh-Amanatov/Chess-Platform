import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    paddingBottom: "40px",
    background: "#0078E7",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize:"1.2rem",
    color: "#fff",
    paddingTop: "10px",
    textAlign: "center",
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "20px",
      paddingBottom: "10px",
      fontSize:"1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "30px",
      paddingBottom: "20px",
      fontSize:"1.4rem",
    },
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#82BFF6",
    fontSize: "0.9rem",
    fontFamily: "Poppins",
    lineHeight: "25px",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize:"1rem",

    },
    [theme.breakpoints.up("md")]: {
      fontSize:"1.1rem",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Box className={classes.root} id="footer">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Typography  className={classes.heading}>
                Machu Picchu
              </Typography>
              <Box>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
                <Link to="/coaches" className={classes.link}>
                  Coaches
                </Link>
                <Link to="/students" className={classes.link}>
                  Students
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Typography  className={classes.heading}>
                Our Community
              </Typography>
              <Box>
                <Link to="/" className={classes.link}>
                  Discord
                </Link>
                <Link to="/" className={classes.link}>
                  Reddit
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Typography  className={classes.heading}>
                Contact us
              </Typography>
              <Box>
                <Link to="/" className={classes.link}>
                  machuPicchu@gmail.com
                </Link>
                <br/>
                <Link to="/" className={classes.link}>
                  +996708949134
                </Link>
              </Box>
            </Box>
            </Grid>
            <Box className={classes.reserved}>All Rights Reserved &reg; {new Date().getFullYear()}</Box>
        </Grid>
      </Box>
    </footer>
  );
};
export default Footer;
