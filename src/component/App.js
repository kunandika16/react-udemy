import React from 'react'
class App extends React.Component {
  state = {
    name: "Andika Rian"
  }
  click = () => {
    this.setState({
      name: this.state.text
    })
  }

  change = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          <input type="text" value= {this.state.text} onChange={this.change}></input>
          <button onClick={this.click}> click </button>

        </div>
      </div>
    )
  }
}


export default App;