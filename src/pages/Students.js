import React from 'react'
import FreeTrialLessonForm from '../components/FreeTrialLessonForm'
import { makeStyles,Typography,Box } from '@material-ui/core'

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
    },}));

const Students = () => {
    const classes = useStyle();
    return (
        <div id="students">
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
           <FreeTrialLessonForm/>
        </div>
    )
}

export default Students
