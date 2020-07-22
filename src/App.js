import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

//goes from function -> class
class App extends Component {
  //calls Component class
  constructor(){
    super();

    //an initial empty state
    this.state = {
      patients: [],
      searchField:''
    }
  }

  //mounting is when react renders component onto DOM
  //a life cycle method

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ patients:users }))
    //.then(users => console.log(users))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }
    
  render() {
    //DESTRUCTURING
    //pulling properties offof objects and setting them to constants
    //pulled patients + sField off of this.state
    const {patients, searchField} = this.state;
    /*same code
    const patients = this.state.patients;
    const searchField = this.state.searchField;
     */
    const filteredPatients = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      //dont set state in render
      <div className="App">
        <h1>Virtual D W/o B</h1>
        <SearchBox 
          placeholder='search patients' 
          handleChange={this.handleChange}
        />

        {/* patients is the prop that's being passed in 
          Children are what get passed in between start + end of CardList
          transferred to specifically card-list.comp
          Passing in the patients as the prop*/}
        <CardList patients={filteredPatients}>
        </CardList>
      </div>
    );
  }
}

export default App;