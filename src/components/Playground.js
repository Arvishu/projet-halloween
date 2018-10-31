import React, { Component } from 'react'
import Card from './Card.js';
import './FourthPage.css'

export default class Playground extends Component {
    constructor(props) {
        super(props)
        this.state = {
          frameworks: ['citrouille','boy-zombie','boy-dead','batman','tete-de-mort','scream','vomito','dracula','mexican-skull','ghost','walking-dead','freddy'],
          duplicatedFrameworks: [],
          randomizedFrameworks: [],
          finalizedFrameworks: [],
          openedFrameworks: []
        }
        this.start()
      }
      handleClick(name,index){
        if(this.state.openedFrameworks.length === 2){
          setTimeout(() => {
            this.check()
          },750)
        }else {
          let framework = {
            name,
            index
          }
          let finalizedFrameworks = this.state.finalizedFrameworks
          let frameworks = this.state.openedFrameworks
          finalizedFrameworks[index].close = false
          frameworks.push(framework)
          this.setState({
            openedFrameworks: frameworks,
            finalizedFrameworks: finalizedFrameworks
          })
          if(this.state.openedFrameworks.length === 2){
            setTimeout(() => {
              this.check()
            },750)
          }
        }
      } 
      check(){
        let finalizedFrameworks = this.state.finalizedFrameworks
        if((this.state.openedFrameworks[0].name === this.state.openedFrameworks[1].name) && (this.state.openedFrameworks[0].index !== this.state.openedFrameworks[1].index)){
          finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true
          finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true
        }else {
          finalizedFrameworks[this.state.openedFrameworks[0].index].close = true
          finalizedFrameworks[this.state.openedFrameworks[1].index].close = true
        }
        this.setState({
          finalizedFrameworks,
          openedFrameworks: []
        })
      }
      start(){
        let finalizedFrameworks = [];
        this.state.duplicatedFrameworks = this.state.frameworks.concat(this.state.frameworks)
        this.state.randomizedFrameworks = this.shuffle(this.state.duplicatedFrameworks)
        this.state.randomizedFrameworks.map((name,index) => {
          finalizedFrameworks.push({
            name,
            close: true,
            complete: false,
            fail: false
          })
        })
        this.state.finalizedFrameworks = finalizedFrameworks
      }
      shuffle(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array
      }

  render() {
    return (
        <div className="playground">
        {
          this.state.finalizedFrameworks.map((framework, index) => {
            return <Card framework={framework.name} click={() => {this.handleClick(framework.name,index)}} close={framework.close} complete={framework.complete}/>
          })
        }
    
    </div>
    )
  }
}