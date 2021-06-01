
import React, { Fragment,useState,Components  } from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom'
import ContainerChart from './Components/Layout/ContainerChart';
import Header from './Components/Layout/Header';
import MainSection from './Components/Layout/MainSection';
import All from './Components/Pages/All';
import Classtime from './Components/Pages/Classtime';
import Freetime from './Components/Pages/Freetime';
import Studytime from './Components/Pages/Studytime';
import Modal from './Components/UI/Modal';

function App(props) {
  const [modalIsShown,setModalIsShown]=useState(false);
  const shownModalHandler=()=>{
    setModalIsShown(true);
  };
  const hideModalHandler=()=>{
    setModalIsShown(false);
  }
  return (
  <Fragment>
    <Header/>
    <MainSection onshownModal={shownModalHandler} />
    { modalIsShown && <Modal />}
    
    
        
    
      
    {/* <BrowserRouter>
    <div>
    <ContainerChart />
    <Router path='/' component={All}/>
    <Router path='/classtime' component={Classtime}/>
    <Router path='/studytime' component={Freetime}/>
    <Router path='/freetime' component={Studytime}/> 
        </div>
    </BrowserRouter> */}
    
  </Fragment>
 
  );
}

export default App;
//www.producturl.com/=>component A
//www.producturl.com/summary?=>component B