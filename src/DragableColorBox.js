import React from 'react'
import { withStyles } from '@material-ui/styles' 

const styles = {
    root:{
        display: "inline-block",
        position: "relative",
        width: "20%",
        height: "25%",
    }
}

function DragableColorBox(props) {
    const { color, classes } = props;
  return (
    <div className={classes.root} style={{backgroundColor: color.color}}>
        { color.name }
    </div>
  )
}
export default withStyles(styles)(DragableColorBox);
