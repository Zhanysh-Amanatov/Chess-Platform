import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  // Accept Terms Code
  //   Checkbox,
  //   FormControlLabel,
  // Paper,
  TextField,
  Box,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  acceptTerms: false,
};
const useStyles = makeStyles((theme) => ({
  root: {
    background: " #fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    marginTop:"50px",
    marginBottom:"100px",
    borderRadius:"20px",
    border:"1px solid #000",
    [theme.breakpoints.between("sm", "md")]: {
      width: "400px",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
  form: {
    width: "250px",
    [theme.breakpoints.between("sm", "md")]: {
      width: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },
  heading: {
    color:"#000",
    fontFamily: "Poppins",
    paddingTop: "20px",
    paddingBottom: "20px",
    fontSize: "1.5rem",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.9rem",
    },
  },
  button: {
    color: "#fff",
    backgroundColor: "#0078E7",
    fontSize: "0.8rem",
    fontWeight: "700",
    width: "180px",
    height: "35px",
    marginTop: "50px",
    marginBottom: "50px",

    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#86BAEB",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "0.9rem",
      width: "200px",
      height: "40px",
      marginTop: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      width: "220px",
      height: "45px",
      marginTop: "30px",
    },
  },
}));

const FreeTrialLessonForm = () => {
  const classes = useStyles();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 2 characters")
      .max(25, "Name must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        {
          message: "Please enter valid phone number",
          excludeEmptyString: false,
        }
      ),
    //   .min(9, "Phone number must be at least 9 numbers")
    //   .max(12, "Phone number must not exceed 12 numbers"),
    /* Accept Terms Code */
    // acceptTerms: Yup.bool().oneOf([true], "Accept terms is required"),
  });

  const {
    register,
    // Accept Terms Code
    // control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    reset(defaultValues);
  };
  return (
    <Fragment>
      {/* <Paper> */}
        <Box className={classes.root}>
          <Typography className={classes.heading}>Free Trial Lesson</Typography>

          <Grid container spacing={3} className={classes.form}>
            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              <TextField
                required
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name")}
                error={errors.name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.name?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className={classes.item}>
              <TextField
                required
                id="phoneNumber"
                label="Phone number"
                variant="outlined"
                fullWidth
                {...register("phoneNumber")}
                error={errors.phoneNumber ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.phoneNumber?.message}
              </Typography>
            </Grid>
            {/* Accept Terms Code */}
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
                        onChange={e => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                    I have read and agree to the terms *
                  </Typography>
                }
              />
              <br />
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms
                  ? "(" + errors.acceptTerms.message + ")"
                  : ""}
              </Typography>
            </Grid> */}
          </Grid>
          <Box>
            <Button
              className={classes.button}
              type="reset"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              Get a free lesson
            </Button>
          </Box>
        </Box>
      {/* </Paper> */}
    </Fragment>
  );
};
export default FreeTrialLessonForm;
