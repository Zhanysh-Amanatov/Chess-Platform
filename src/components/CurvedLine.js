import React from 'react'
import * as d3 from 'd3'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>({
root:{
    borderColor:"#000"
},
path :{
    stroke:"black",
    fill:"transparent"
},
line :{
    stroke:"red",
}
}))
const CurvedLine = () => {
    const classes = useStyles();
    // const line = () =>{
    //     const line = d3
    //     .line()
    //     .x(d => d[0])
    //     .y(d => d[1]);

    //     const points = [[10,10],[50,50]]
    

    return (
        // <path d={line(points)} style={{stroke:"red"}}></path>
        <div className={classes.root}>
        <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

        <path d="M 10 10 C 20 20, 40 20, 50 10"  style={{stroke:"red"}} className={classes.path}/>
        <line x1={10} y1={10} x2={20} y2={20 } className={classes.line}/>
        <line x1={50} y1={10 }x2={40} y2={20} />
        </svg>
        </div>
    )
}


export default CurvedLine

    