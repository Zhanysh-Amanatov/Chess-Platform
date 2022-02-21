import { makeStyles, Button, Typography, Box, Grid } from "@material-ui/core";
import image from "../assets/image.png";
// is to Navigate the Form to another page 
//import { useNavigate } from "react-router-dom";
import FreeTrialLessonForm from "../components/FreeTrialLessonForm";
import { Link as Scroll } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${image})`,
    // boxSizing:"borderBox",
    // margin:"0",
    // padding:"0",
    // overflowX:"hidden",
    //width:"100%",
    //height:"150vh"
  },
  section1: {
    height:"67vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "90px",
    marginBottom: "70px",
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "row",
      marginBottom: "120px",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  desc1: {
    fontFamily: "Poppins",
    fontSize: "0.6rem",
    letterSpacing: "0.3rem",
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
  image: {
    height: "200px",
    width: "200px",
    [theme.breakpoints.between("sm", "md")]: {
      height: "250px",
      width: "250px",
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
      width: "300px",
    },
  },
  section2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#0078E7",
    paddingBottom: "20px",
    marginTop:"110px",
    [theme.breakpoints.between("sm", "md")]: {
      alignItems: "start",
      marginTop:"200px"
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "start",
      marginTop:"150px"
    },
  },
  button: {
    marginTop: "-100px",
    marginBottom: "80px",
    color: "#fff",
    backgroundColor: "#0078E7",
    fontSize: "0.7rem",
    fontWeight: "700",
    width: "160px",
    height: "35px",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#86BAEB",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "200px",
      height: "40px",
      fontSize: "0.9rem",
      marginTop: "-170px",
      marginBottom: "150px",
      marginLeft: "70px",
    },
    [theme.breakpoints.up("md")]: {
      width: "240px",
      height: "45px",
      fontSize: "1.1rem",
      marginTop: "-180px",
      marginBottom: "160px",
      marginLeft: "200px",
    },
  },


  heading: {
    fontFamily: "Poppins",
    fontSize: "1.7rem",
    textAlign: "center",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.9rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.1rem",
    },
  },
  text: {
    fontFamily: "Poppins",
    fontSize: "1rem",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginLeft: "30px",
    marginRight: "30px",
    color: "#fff",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.1rem",
      marginLeft: "40px",
      marginRight: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
      marginLeft: "50px",
      marginRight: "50px",
    },
  },
  header: {
    fontFamily: "Poppins",
    paddingTop: "60px",
    paddingBottom: "30px",
    textAlign: "center",
    fontSize: "1.7rem",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.9rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.1rem",
    },
  },
  section3: {
    paddingTop: "30px",
    paddingBottom: "60px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  cardImage: {
    width: "210px",
    height: "210px",
    [theme.breakpoints.between("sm", "md")]: {
      width: "230px",
      height: "230px",
    },
    [theme.breakpoints.up("md")]: {
      width: "250px",
      height: "250px",
    },
  },
  cardDesc: {
    fontFamily: "Poppins",
    fontSize: "1.3rem",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  },
  form:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
}));

const Home = () => {
  const classes = useStyles();
  // is to Navigate the Form to another page 
  //const navigate = useNavigate();
  // const onButtonClick = (e) => {
  //   e.preventDefault();
  //   navigate("/students");
 // };
  return (
    <div className={classes.root} id="home">
      <div className={classes.section1}>
        <div>
          <Typography variant="h6" className={classes.desc1}>
            MASTER YOUR CHESS SKILLS
          </Typography>
          <Typography variant="h4" className={classes.desc2}>
            Be the best player <br />
            with the best <br />
            coaches
          </Typography>
        </div>
        <Box
          className={classes.image}
          component="img"
          alt="logo"
          src="https://www.getillustrations.com/packs/circle-flat-illustrations/scenes/_1x/business%20_%20strategy,%20game,%20chess,%20gameplan,%20plan_md.png"
        />
      </div>
      <div className={classes.section2}>
      <Scroll to="form" smooth="true">
        <Button
          variant="contained"
            // is to Navigate the Form to another page 
           // onClick={onButtonClick}
          className={classes.button}
        >
          TAKE A FREE LESSON
        </Button>
        </Scroll>
        <div>
          <Typography className={classes.heading}>Our mission is</Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            diam risus nulla quis tempor donec. Nunc diam ac tempus, nunc.
            Cursus eu consectetur diam non eget orci id amet nulla. Sodales
            velit mi netus placerat.
          </Typography>
        </div>
      </div>
      <Typography variant="h4" className={classes.header}>
        With us you can:
      </Typography>
      <Grid container spacing={6} className={classes.section3}>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.card}>
            <Box
              className={classes.cardImage}
              component="img"
              alt="step1"
              src="https://res.cloudinary.com/webalys/image/private/w_420,h_420,ar_1/f_auto/v1/icons/illustrations-brooklyn/business/business/strategy-2-ccnexlg1go4984ex4le83h.png"
            />
            <Typography variant="h5" className={classes.cardDesc}>
              train One-to-One with best <br /> coaches around the world{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.card}>
            <Box
              className={classes.cardImage}
              component="img"
              alt="step1"
              src="https://res.cloudinary.com/webalys/image/private/w_1600,h_1600,ar_1/f_auto/v1/icons/illustrations-brooklyn/business/business/strategy-1-j0lrarkg35lee7facn7y3d.png"
            />
            <Typography variant="h5" className={classes.cardDesc}>
              rapidly boost your chess knowledge
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.card}>
            <Box
              className={classes.cardImage}
              component="img"
              alt="step1"
              src="https://res.cloudinary.com/webalys/image/private/w_420,h_420,ar_1/f_auto/v1/icons/illustrations-brooklyn/customer-support/customer-support/insurance-2-ssw9u296ru8676vivkntxf.png"
            />
            <Typography variant="h5" className={classes.cardDesc}>
              improve your english skills
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.card}>
            <Box
              className={classes.cardImage}
              component="img"
              alt="step1"
              src="https://res.cloudinary.com/webalys/image/private/w_420,h_420,ar_1/f_auto/v1/icons/illustrations-brooklyn/business/business/startup-2-60k8yg0ptmtj1qyzbj25zc.png"
            />
            <Typography variant="h5" className={classes.cardDesc}>
              make your dreams come true
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.form} id="form">
      <FreeTrialLessonForm/>
      </div>
    </div>
  );
};

export default Home;
