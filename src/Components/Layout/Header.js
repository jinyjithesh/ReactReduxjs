import React, { Fragment } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import classes from './Header.module.css'
import MenuButton from './MenuButton';
import MainSection from './MainSection';
import ContainerChart from './ContainerChart';
import All from '../Pages/All';
function Header (){
return(
   <Fragment>
       <div > 
           <nav className={classes.header} >
        <div className={classes.box1} >   
        
        <h1 > <AccountCircleIcon /> Aditya Prasad</h1>
           </div>
         
   
       <button className={classes.but1}><PhoneIphoneOutlinedIcon/>Add Device</button>
       <div className={classes.but2}><MenuButton/>
        </div>
       </nav>
       <div className={classes['main-1']}>
       <div className={classes.h}>
       Activities Summary
       </div>
       <MainSection/>
       <ContainerChart/>
      

                </div>



      
       </div>
      

       
       
      
   </Fragment>
);
};
export default Header;