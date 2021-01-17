import React from 'react'

//component imports
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import SignIN from "./components/SignIN"
import NavBar from './components/NavBar'


//actions import 

//router import
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      <Switch>
      <Route exact to="/" component={SignIN}/>
      <Route to="/page1" component={Page1}/>
      <Route to="/page2" component={Page1}/>

      </Switch>
      </Router>
  
    </div>
  );
}




export default App
