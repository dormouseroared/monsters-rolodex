import { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      string: "Hello Yihua in state"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is the class version</p>
          <p>{ this.state.string }</p>
          <button onClick={() => this.setState({string: "Hello Andrei"})}>Change Text</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
