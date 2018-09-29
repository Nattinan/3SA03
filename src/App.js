import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

 // const word = "Nattinan";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="Nattinan"/>
        <p>Student ID: 5935512051</p>
        <p>Name-Sname: Nattinan Kongleng</p>
      </div>

     
    );
  }
}


export default App;

