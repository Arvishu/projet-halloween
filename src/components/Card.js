import React, { Component } from 'react';
import './FourthPage.css'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
      }
    clicked(framework){
      this.props.click(framework)
    }

  render() {
    return (
        <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.framework)}>
        <div className="front">
          
        </div>
        <div className="back">
          <img alt="halloween" src={"https://raw.githubusercontent.com/Lydia-Dali/png-halloween/master/" + this.props.framework + ".png"}/>
        </div>
      </div>
    )
  }
}
