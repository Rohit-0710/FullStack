import React, {useState} from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';


const[initialState, setInitialState] = useState([]);

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const data = []

const k = () =>{
controls.map((x,y) => {
  if(x.label === label){
    controls[y].type = true;
  }
  else {
    controls[y].type = false
  }
  data.push(x);
  //return data
});
setInitialState(data);
}

//either use return or instead of {} use ()
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    Total Price : {props.price}
    {controls.map((ctrl) => (

      <BuildControl key={ctrl.label} label={ctrl.type}
        addbutton={() => props.add(ctrl.type)}
        deletebutton={() => props.delete(ctrl.type)}
      />

    ))}
    <button className={classes.OrderButton}
      disabled={!props.purchasestate}
      onClick={props.showModal}>ORDER NOW</button>

  </div>
)



export default buildControls;