import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {

    //console.log("inside",props.pricecheck)
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
            </div>
            <button className={classes.More} onClick={props.addbutton}>More</button>
            <button className={classes.Less} onClick={props.deletebutton}>Less</button>

        </div>
    )
}

export default buildControl;