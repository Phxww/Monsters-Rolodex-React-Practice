import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters:[
        {
          id:'1',
          name: 'Zombie1'
        },{
          id:'2',
          name: 'Zombie2'
        },{
          id:'3',
          name: 'Zombie3'
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.state.monsters.map(monster=>(
            <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
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
