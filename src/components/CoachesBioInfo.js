import React from 'react'
import { makeStyles,Typography,Box,Avatar } from '@material-ui/core' 

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      fullName: {
        fontSize: "1rem",
        fontFamily: "Poppins",
        color: "#0078E7",
        textAlign:"center",
        [theme.breakpoints.between("sm", "md")]: {
          fontSize: "1.1rem",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "1.2rem",
        },
      },
      bioBox:{
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
      moreBio:{
          paddingTop:"20px",
      },
      more:{
          textAlign:"center"
      }
}))

const CoachesBioInfo = ({person}) => {
    const classes = useStyles();
    return (
        <div>
         <div>
          <Typography variant="h6" className={classes.desc1}>
            HAVE A LOOK AT
          </Typography>
          <Typography variant="h4" className={classes.desc2}>
            Coach's brief biography
            <br />
            coach.
          </Typography>
        </div>

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
        <Typography className={classes.bio}>
          {person.biography}
        </Typography>
        </div>
        <div className={classes.moreBio}>
        <Typography className={classes.more}>
          {person.more}
        </Typography>
        </div>
        </Box>
            
        </div>
    )
}

export default CoachesBioInfo

