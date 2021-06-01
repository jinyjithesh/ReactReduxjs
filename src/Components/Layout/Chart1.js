import React,{useState,useMemo} from 'react';
import classes from './Chart1.module.css';
//  import { Chart,DoughnutController,}  from 'chart.js';
//  Chart.register(...DoughnutController);

import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
function  Chart1(){
  const [chartData,setChartData]=useState({});
const[usingTime,setUsingTime]=useState([])

const chart=()=>{
  let time=[];
  let tottal=[];
axios.get("https://api.mocklets.com/mock68182/screentime")
.then(res =>{
  console.log(res)
  for(const dataObj of res.data.data){
time.push(parseInt(dataObj.totalTime))
tottal.push(parseInt(dataObj.total))
  }
})
.catch(err =>{
  console.log(err);
});
console.log(time,tottal)
};
  const data = {
    legend: {
      position: 'left',
    },
    labels: [ 'class',  'study',  'free time'],
      datasets: [
        {
        
          backgroundColor: [ ' #2D82FE',' #2FED51C2','#FF9E57',],
          data: [130,20,80,30],
          label: '# of Votes',
          
          borderWidth:0,
          borderradius: 27,
        },
      ],
      
      hoverOffset: 1,
      
    };
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
    return(

       <div className={classes.box}>
         <div  className={classes.h}>
         <h3>All Screen Time</h3>
         </div>
           
           <div className={classes.box1}>
           <Doughnut  data={data} axes={axes} /> 
         
           </div>
        
       </div>

      
    );
};

export default Chart1;