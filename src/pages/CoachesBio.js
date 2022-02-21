import React from 'react'
import { makeStyles,} from '@material-ui/core' 
import person from '../static/person'
import CoachesBioInfo from '../components/CoachesBioInfo'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
}))

const CoachesBio = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} id="coachesBio">
        <CoachesBioInfo person={person[0]}/>  
        </div>
    )
}

export default CoachesBio;

