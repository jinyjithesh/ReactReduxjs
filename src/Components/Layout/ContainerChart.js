import React from 'react';
import { Fragment } from 'react';
import All from '../Pages/All';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import classes from './ContainerChart.module.css';

function ContainerChart(){
  return(
    <Fragment>
       <section className={classes.container}>
   <Chart1/>
   <Chart2/>
    <Chart3/> 
    </section>
   
    </Fragment>
   
  )  ;
};
export default ContainerChart;