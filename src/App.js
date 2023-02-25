//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'Imre'
    }
  }
  
  changeState =() => (
    this.setState(
      {name: this.state.name === "Imre" ? "Tatai" : "Imre" }
    )
  )

  render =() => (
      <div> 
        <h4 className='bg-primary text-white text-center p-2'>
          {this.state.name} Hello <button className='btn btn-danger m-2' onClick={this.changeState}>XXX</button>
        </h4>
      </div>
  )
}
