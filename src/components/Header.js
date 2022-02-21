import { AppBar, CssBaseline, Toolbar,Typography,Button, makeStyles,useTheme, useMediaQuery } from '@material-ui/core'
import { Link } from "react-router-dom"
import { Link as Scroll } from 'react-scroll'
import React from 'react'
import DrawerComponent from './Drawer'
import image from '../assets/image.png'

const useStyles = makeStyles((theme) => ({
    root:{
        background:`url(${image})`
        // backgroundColor:"#fff"
    },
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
      },
     logo: {
         color:"#0078E7",
         fontFamily:"Poppins",
         fontSize:"1.3rem",
         fontWeight:"600",
        flexGrow: "1",
        cursor: "pointer",
        marginLeft:"30px",
      },
      link: {
        textDecoration: "none",
        color: "black",
        fontSize: "1.2rem",
        fontFamily:"Poppins",
        marginRight: theme.spacing(10),
        "&:hover": {
          color: "#82BFF6",
          borderBottom: "1px solid black",
        },
      },
      button:{
        color:"#fff",
        backgroundColor:"#0078E7",
        borderRadius:"20px",
        "&:hover": {
            backgroundColor: "#86BAEB",
          }
        }
}))

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    return (
       <AppBar position="sticky" className={classes.root}>
        <CssBaseline/>
        <Toolbar>
            <Typography variant="h4" className={classes.logo}>
            {/* <Link to="/">Machu Picchu</Link> */}
            Machu Picchu
            </Typography>
            {isMobile ? (
                <DrawerComponent/>
            ):(
            <div className={classes.navLinks}>
            {/* <Scroll to="home" smooth="true"> */}
                <Link to="/"  className={classes.link} >
                    Home
                </Link>
            {/* </Scroll> */}
            {/* <Scroll to="coaches" smooth="true"> */}
                <Link to="/coaches" className={classes.link}>
                    Coaches
                </Link>
                {/* </Scroll> */}
                {/* <Scroll to="students" smooth="true"> */}
                <Link to="/students" className={classes.link}>
                    Students
                </Link>
                {/* </Scroll> */}
                <Scroll to="footer" smooth="true">
                <Button variant="contained" className={classes.button}>Contact us</Button>
                </Scroll>
            </div>
            
            )}
        </Toolbar>
       </AppBar>
    )
    
}

export default Header;
