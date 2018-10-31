import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink} from 'react-router-dom';
import './App.css';

import FirstPage from './components/FirstPage.js';
import SecondPage from './components/SecondPage.js';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      
       
<BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/Welcome" exact>Welcome</NavLink>
        </li>

          <li>
            <NavLink to="/FirstPage" exact >page1</NavLink>
        </li>

        <li>
          <NavLink to="/SecondPage" exact >page2</NavLink>
        </li>

        <li>
          <NavLink to="/ThirdPage" exact activeStyle={
            {color:'red'}
          }>page3</NavLink>
        </li>

        <li>
          <NavLink to="/FourthPage" exact >Memory Halloween</NavLink>
        </li>
      </ul >

     
      <Route exact path="/Welcome"strict component={Welcome}/> 

      <Route exact path="/FirstPage"strict component={FirstPage}/>

      <Route exact path="/SecondPage"strict component={SecondPage}/>

      <Route exact path="/ThirdPage"strict component={ThirdPage}/>

      <Route exact path="/FourthPage"strict component={FourthPage}/>

    </div >

</BrowserRouter>


      
    )
  }
}

export default App;
