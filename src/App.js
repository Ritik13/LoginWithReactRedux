import React from 'react'

//component imports
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import SignIN from "./components/SignIN"
import NavBar from './components/NavBar'


//actions import 

//router import
import {  Route , Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={SignIN}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
      </Switch>
  
    </div>
  );
}




export default App
