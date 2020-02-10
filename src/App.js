import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userInput: "",
       list: []
    }
  }
  changeUserInput(input){
    this.setState({
      userInput: input
    })
  }
  addToList(input){
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: ""
    })
  }
  render() {
    return (
      <div className="to-do-list-main">
        <input 
        onChange={(e)=>this.changeUserInput(e.target.value)}
        type="text" 
        value={this.state.userInput}/>
        <button onClick={()=>this.addToList(this.state.userInput)}>Add to List</button>
        <ul>
    {this.state.list.map((val)=><li>{val}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
