import classes from './Chart3.module.css';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import LaptopOutlinedIcon from '@material-ui/icons/LaptopOutlined';
function Chart3(){
return(
    <div className={classes.box}>
        <div className={classes.h}>
        <h3 >
        By Devices
        </h3>
        </div>
        <div  className={classes.container}>
           
           <PhoneIphoneOutlinedIcon  style={{ fontSize:44, color: '#414042' }} foclassName={classes.icon}/>
           <p className={classes.text}>Adi’s Phone</p>
            40m
    
        </div>
        <div>
        <span><LaptopOutlinedIcon style={{ fontSize:139 }} />
       Adi’s Laptop <a>1h 30m</a> 
        </span>
        </div>
        <p className={classes.t}>See All Devices</p>
    </div>
)
};
export default Chart3;