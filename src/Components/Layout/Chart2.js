import classes from './Chart2.module.css';
import Progressbar from 'react-progressbar';
function Chart2(){

    return(

               <div className={classes.box}>  
          
            <div className={classes.h}>
            <h3 >Free-time Usage</h3>
            
            </div>
          <div >

            <Progressbar progress={100} label={29} className={classes.bar} />
            <button  className={classes.button} >Extend Free-time</button>

            </div>
            
           <div className={classes.t}>
            <p >Change Time Restrictions</p>

            </div>
        
            
               </div>
             
           )
};
export default Chart2;