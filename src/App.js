import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  //est states data
    state = {
      person: [
        {name: 'Bob', age: 23},
        {name: 'Bill', age: 46},
        {name: 'Theo', age: 99},
        {name: 'James', age: 100}
      ],
      otherThing: 'some other value'
    }
    //event handler
    changeNameHandler = (newName) => {
      console.log('its britney, bitch.');
    //DONT DO THIS  this.state.person[0].name = 'Robert';
      this.setState({
        person: [
          {name: newName, age: 23},
          {name: 'Billiam', age: 46},
          {name: 'Theodore', age: 105},
          {name: 'Jaime', age: 50}
        ]
      });
    }

    changedNameHandler = (event) => {
      this.setState({
        person: [
          {name: 'Bob', age: 23},
          {name: event.target.value, age: 46},
          {name: 'Theodore', age: 105},
          {name: 'Jaime', age: 50}
        ]
      });
    }

  render() {
  //js styles, use cameCase
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid seagreen',
      borderRadius: '6px',
      padding: '8px',
      marginTop:'20px'
    };

    return (
      <div className="App">
        <button
        style={style}
        onClick={() => this.changeNameHandler('Britney!!!!')}>Change Name</button>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age} />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.changeNameHandler.bind(this, 'Marty!')}
            changed={this.changedNameHandler}
            >My hobbies: Fun.</Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age} />
          <Person
            name={this.state.person[3].name}
            age={this.state.person[3].age} />
      </div>
    );
  }
}

export default App;
