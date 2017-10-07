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

  handleReactPlayerRef(ref) {
    // Monkey-patch the element's `play` method to return a Promise.
    const _play = ref.player.player.play
    ref.player.player.play = () =>
      _play.apply(ref.player.player) || Promise.resolve()
  }

  render() {
    return (
      <div>
        <ReactPlayer
          ref={this.handleReactPlayerRef}
          url="https://cdn.filestackcontent.com/fQt1jMoTxiW7GubuM5MB"
          playing={this.state.playing}
        />
        <button onClick={this.handleClick}>toggle play</button>
      </div>
    )
  }
}

export default App
