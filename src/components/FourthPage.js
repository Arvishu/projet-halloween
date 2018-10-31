import React, { Component } from 'react';

import './FourthPage.css';
import Playground from './Playground.js';

export default class FourthPage extends Component {

  

  render() {
    return (
      <div className="background-fourthPage">
        <img className="ghost"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/>
      <img className="ghost1"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/>
      <img className="ghost2"
     src="https://media.giphy.com/media/aKQQzhoLRIzok/giphy.gif"
     alt="ghost"/>
     <img className="flambeau"
     src="https://img1.liveinternet.ru/images/attach/b/4/103/121/103121361_fxhh4zbyhya.gif"
     alt="flambeau"/>
      <div id="gapp">
      <Playground />
      </div>
      </div>  
    )
  }
}
