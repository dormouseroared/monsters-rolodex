import { Component } from "react"
import "./App.css"

import {CardList} from "./components/card-list/card-list.component"
import {ConsoleLog} from "./components/console-log/console-log.component"

import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => this.setState({monsters: result}))
    
  }

  // monsters and the array of objects are a key value pair

  render() {
    // flag to try out a conditional dump of the array with map
    // could also try { dump && ()}
    const dump = false
    
    const {monsters, searchField} = this.state
    // same as monsters = this.state.monsters etc
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    

    /*
      JSX starts here
    */
    return (
      <div className="App">

        <ConsoleLog stringify={false}>{this.state.monsters}</ConsoleLog>
        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder="search Monsters..." handleChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))}/>


        

        <CardList monsterList={filteredMonsters} />




        {dump ?

          <>
          <div>
            <ul>
            {this.state.monsters.map((user) => 
              <li key={user.id}>
                {user.name} &bull; {user.email}
              </li>)}
            </ul>
          </div>
          </>

        : null}

      </div>
    )
  }
}

// experimental section
// https://www.youtube.com/watch?v=oQlwcDkcYe0
// You can't console.log in React
// The first button logs out the event, but the second button does nothing
// insert <Buttons /> above to show these two buttons
// see the ConsoleLog component for more details

// eslint-disable-next-line
function Buttons () {
  const handler = (event) => {
    console.log(event)
  }

  return (
    <>
      <p></p>
      <button onClick={handler}>Pass a handler with log</button>
      <button onClick={console.log}>Pass console.log directly</button>
    </>
  )
}

// setState is asynchronous, so don't expect an immediate update
// the second parameter is for a callback to run when the work is completed
// and it is left in as a reminder

export default App



// <input type="search" placeholder="search monsters" onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))} />