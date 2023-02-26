//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name        : 'Imre',
      todos       : [ {action: 'todo1', done: false},
                      {action: 'todo2', done: false},
                      {action: 'todo3', done: false} 
                    ],
      newItemText : ''
    }
  }
  
  changeState = () => {
    this.setState(
      {name: this.state.name === "Imre" ? "Tatai" : "Imre" }
    )
  }

  updateNewItemText = (event) => {
    console.log('updateNewItemText:', event.target.value);
    this.setState({newItemText: event.target.value});
  }

  createNewTodo = () => {
    if(this.state.newItemText.trim() !== '') {
      if(!this.state.todos.find(item => item.action.trim() === this.state.newItemText.trim())) {      
        console.log('add:', this.state.newItemText);
        this.setState({
          todos:  [ ...this.state.todos,
                    {action: this.state.newItemText, done: false}
                  ]
        });
      }
      
      this.setState({newItemText: ''});
    }
  }

  logTodos = () => console.log('todos length:', this.state.todos.length);

  tableTodos = () => this.state.todos.map(item => 
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item)}></input>
      </td>
    </tr>
  );

  toggleTodo = (todo) => {
    console.log('toggleTodo called with:', todo);
    this.setState({
      todos: this.state.todos.map(item => item.action === todo.action ? { ...item, done: !item.done} : item)
    }); 
  };

  render() { 
    this.logTodos();

    return(  
      <div> 
        <h4 className='bg-primary text-white text-center p-2'>
          {this.state.name} todo's incomplete items: ({this.state.todos.filter(t => !t.done).length})
        </h4>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11'>
              <input className='form-control' onChange={this.updateNewItemText} value={this.state.newItemText}></input>
            </div>
            <div className='col-1'>
              <button className='btn btn-danger' onClick={this.createNewTodo}>Add</button>
            </div>
          </div>
          
          <div className='p-2'></div>
            
          <table className='table table-striped table-bordered text-center'>
            <thead className='bg-secondary'>
              <tr>
                <th className='col-8'>Action</th>
                <th className='col-4'>Done</th>
              </tr>
            </thead>
            <tbody>
              {this.tableTodos()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
