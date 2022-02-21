import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  rating: {},
}));

export default function BasicRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Rating
        className={classes.rating}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}