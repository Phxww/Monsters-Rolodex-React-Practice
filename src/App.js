import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';


class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters:[],
      searchField:''
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
    const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter( monster =>
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e => this.setState({searchField : e.target.value})} 
        />
        <CardList  monsters={filteredMonster} />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        {/* </header> */}
      </div>
    );
  }

}



export default App;
