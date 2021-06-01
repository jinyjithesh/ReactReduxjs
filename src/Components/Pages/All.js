import React, { useState ,Fragment} from 'react';
import classes from './All.module.css';
import axios from 'axios';
//  import { Chart,DoughnutController,}  from 'chart.js';
//  Chart.register(...DoughnutController);

import { Doughnut } from 'react-chartjs-2';

const  All=()=>{
const [chartData,setChartData]=useState([]);
const[usingTime,setUsingTime]=useState([])

const chart=()=>{
axios.get("https://api.mocklets.com/mock68182/screentime")
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err)
})}
const data = {
      
      datasets: [{backgroundColor: [' #2D82FE',' #2FED51C2','#FF9E57',],
                  label: '# of Votes',
                  data: [130,20,80,30],
                  borderWidth: 4,
                  },],
      labels:   ['class',  'study',  'free time'],
      hoverOffset:[4] 
    };
 
    return(

       <div className={classes.box}>
           <h1>All Screen Time</h1>
           <div className={classes.box1}>
           <Doughnut  data={chartData} /> 
           
           </div>
        
       </div>

      
    );
};

export default All;