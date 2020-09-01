import React,{Component} from 'react';
// import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters:[]
    }
  }

  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response =>  response.json())
    .then( users =>{
      console.log("user:",users)
      console.log("this.setState.monsters:",this.setState.monsters)
      this.setState({monsters : users})}
      
      
      )

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <CardList name='Phx'>
          {
            this.state.monsters.map(monster=>(
            <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
        </CardList>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
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
    );
  }

}



export default App;
