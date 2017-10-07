import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return (
      <div>
        <ReactPlayer url="https://cdn.filestackcontent.com/fQt1jMoTxiW7GubuM5MB" playing={this.state.playing} />
        <button onClick={this.handleClick}>toggle play</button>
      </div>
    )
  }
}

export default App
