import React,{Component} from 'react';
import './todoinput.css';
import Task from './task';


export default class Todoinput extends Component {

  constructor(props) {

    super(props);

    this.state = {
      value:"",
      todos:[
         {text:"make dinner tonight!"},
        {text:"Fold the laundry"},
        {text:"learn to make a React app"}

      ]


  };


this.handleChange = this.handleChange.bind(this);
this.addTodo = this.addTodo.bind(this);


    }


    handleChange(e) {


      console.log(e.target.value);
      this.setState({value:e.target.value});
    }

    addTodo(todo) {
let tasks = this.state.todos;
tasks.push({text:todo});
this.setState({todos:tasks});
this.setState({value:""});
    }

  render() {
 let all = this.state.todos.map((data)=>{
     return <Task name={data.text} />
   })


 var len = this.state.todos.length;

    return(
      <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <button className="btn btn-primary" onClick={()=>this.addTodo(this.state.value)}>Submit</button>

    <ul>

  {all.reverse()}

    </ul>


      </div>
    );
}
}
