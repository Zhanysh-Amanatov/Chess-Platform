import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Scroll } from  'react-scroll'

const useStyles = makeStyles(() => ({
    link:{
        textDecoration:"none",
        color:"#000",
        fontSize:"1.2rem",
        fontFamily: "Poppins",
        margin:"20px",
        "&:hover": {
          color: "#82BFF6",
          borderBottom: "1px solid black",
        },
    },
    icon:{
        color:"#000",
    },
    button:{
      marginTop:"40px",
      marginLeft:"15px",
      backgroundColor:"#0078E7",
      borderRadius:"20px",
      color:"#fff",
      "&:hover": {
        backgroundColor: "#86BAEB",
      }

      //width:"100%"
    }
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
    
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/coaches" className={classes.link}>Coaches</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/students" className={classes.link}>Students</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <Scroll to="footer" smooth="true">
          <Button variant="contained"  onClick={() => setOpenDrawer(false)} className={classes.button}>Contact us</Button>
       </Scroll>
        </List>
      </Drawer>
      <IconButton className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
