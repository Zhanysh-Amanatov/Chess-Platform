import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Typography, CardActions, Button } from "@material-ui/core";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
    width: 150,
    height: 180,
    borderRadius: "20px",
    backgroundColor: "#f2f2f2",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 170,
      height: 200,
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 210,
    },
  },
  avatar: {
    marginBottom: "-40px",
  },
  fullName: {
    fontSize: "1rem",
    fontFamily: "Poppins",
    color: "#0078E7",
    textAlign: "center",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  },
  bioBox: {
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  bio: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontSize: "0.7rem",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
  },
}));

const CoachProfile = ({ person }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("/CoachesBio");
  };
  const personHandle = e => {
  e.preventDefault()
  window.location.assign(person.more)
}
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <Avatar
          alt=""
          sx={{
            width: {
              xs: 80,
              sm: 100,
              md: 120,
            },
            height: {
              xs: 80,
              sm: 100,
              md: 120,
            },
          }}
          src={person.avatar}
        />
      </div>
      <Box className={classes.desc}>
        <Typography className={classes.fullName}>{person.fullName}</Typography>
        <div className={classes.bioBox}>
          <Typography className={classes.bio}>{person.biography}</Typography>
        </div>
        {/* <CoachProfileRating /> */}
        {/* person.map(man) =>  */}
        <CardActions>
          <Button size="small" color="primary" onClick={personHandle}>
            More
          </Button>
          <Button size="small" color="secondary">
            Book
          </Button>
        </CardActions>
      </Box>
    </div>
  );
};

export default CoachProfile;
