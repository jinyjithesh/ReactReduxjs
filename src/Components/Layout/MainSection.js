import { Modal, Radio } from '@material-ui/core';
import React from 'react';
import Chart1 from './Chart1';
import classes from './MainSection.module.css'

function MainSection(props){
    const options = [
        'All',
        'Class time only',
        'Study time only',
      ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
      
  const handleClose = () => {
    setOpen(false);
  };
  const body=(
     
      <div>
    <h2 id="" options="All">All</h2>
   <p id="simple-modal-description">Activities during class-time, study-time and play time are shown.</p>
  <Radio onClick ={handleClose}/>
  <h2 id="">Class-time only</h2>
  <p ></p>
  <Radio/>
  <h2 id="">Study-time only</h2>
  <p id="simple-modal-description"></p>
  <Radio/>
  <h2 id="">Free-time only</h2>
  <p id="simple-modal-description">Free-time only</p>
  <Radio/>
  </div>
  )
 
    return(
    <section className={classes.container}>
     <select className={classes.b} onClick={props.onshownModal}> 
         <option  >All </option>
         Activities during class-time, study-time and play time are shown.
         
         <option >Class-time only</option>
         <option >Study-time only</option>
         <option>Free-time only</option>
       {body}
       </select> 
      
    </section>
  
      
    );
};
export default MainSection;