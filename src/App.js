import React from 'react';
import NavBar from './component/NavBar';
import Header from './component/Home/Header';
import HomePage from './component/Home/Home';
import SobreMi from './component/SobreMi/SobreMi';
import Contacto from './component/Contacto/Contacto';
import Plan from './component/Plan/Plan';
import {Route, Switch} from "react-router-dom";
import './App.css';


function App() {
  return (
    <>
      <NavBar/>
      <Header/>
    <Switch>
      <Route exact path="/quiero-comunicar/"><HomePage/></Route>
      <Route path="/quiero-comunicar/Plan" exact><Plan/></Route>
      <Route path="/quiero-comunicar/SobreMi" exact><SobreMi/></Route>
      <Route path="/quiero-comunicar/Contacto" exact><Contacto/></Route>      
    </Switch>
    </>
  )
}




export default App;