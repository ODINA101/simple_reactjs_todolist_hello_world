import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todoinput from './components/todoinput';

class App extends Component {
constructor(props) {
  super(props);
console.log(props);
}

  render() {
    return (
      <div className="App">
    <div className="todo-wrapper">
    <Header />
    <Todoinput/>
<ul>
{

}

</ul>


    </div>

      </div>
    );
  }
}

export default App;
