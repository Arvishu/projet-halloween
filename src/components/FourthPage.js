import React, { Component } from 'react';

import './FourthPage.css';
import Playground from './Playground.js';
import '../App.css';


export default class FourthPage extends Component {

  

  render() {
    return (
      <div className="background-fourthPage">
      <h1 className="title-memory">Memory Halloween</h1>
        <img className="chauve-souris" src="http://www.sorgina.com/img/home/murcielagos3back_b.gif" alt="chauve"/>
        {/* <img className="ghost"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/> */}
      <img className="ghost1"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/>
     
      <img className="ghost2"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/>
     <img className="flambeau"
     src="https://img1.liveinternet.ru/images/attach/b/4/103/121/103121361_fxhh4zbyhya.gif"
     alt="flambeau"/>
     <img className="eyes"
     src="https://media2.giphy.com/media/Hm9GrdOICMoKs/giphy.gif?cid=3640f6095bd96e656268514f674667aa"
     alt="eyes"/>
      <div id="gapp">
      <Playground />
      </div>
      </div>  
    )
  }
}
