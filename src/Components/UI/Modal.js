import React,{useState} from 'react';
import { Radio } from '@material-ui/core';
import classes from './Modal.module.css';

import ContainerChart from '../Layout/ContainerChart';

function Modal(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
return(
    <div className={classes.modal} >

    <table className={classes.table}>
                  <thead>Activities during which time is shown ?</thead>
                
                      
                        <tr>
                          
                              <h6>All </h6>
                              <p >Activities during class-time, study-time and play time are shown.
                                   </p>
                          
                                <td><Radio onClick={handleOpen }/></td>
                                {open &&<ContainerChart/>}
                        </tr>
                        <tr>
                        <h6 >Class-time only</h6> 
                        <p>Only the activities during the times you scheduled as class-time are shown.</p>
                  <td><Radio  onClose={handleClose}><a href="/classtime"></a></Radio></td>
                  </tr>
                        <tr>
                        <h6 >Study-time only</h6>
                      <p >Only the activities during the times you scheduled as study-time or when manually switched to study-mode from the mode page are shown.</p>
                       <td> <Radio/><a href="/studytime"></a>
                       </td> 
                       </tr><tr>
                        <h6 >Free-time only</h6>
                      <p >Only the activities during the times you scheduled as free-time or when manually switched to free-mode from the mode page are shown.are shown.</p>
                      <td><Radio/><a href="/freetime"></a></td>
                        </tr>
               
                     
                    
                     </table>
    
               
              </div>
);

};
export default Modal;