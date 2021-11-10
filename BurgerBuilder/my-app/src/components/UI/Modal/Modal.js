import React from 'react';
import classes from './Modal.module.css'
import Auxillary from '../../../hoc/Auxillary'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Auxillary>
        <Backdrop show = {props.show} clicked = {props.noshow}/>
    <div
        className={classes.Modal} 
        style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}
    >
        {props.children}
    </div>
    </Auxillary>
)



export default modal