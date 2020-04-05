import React from 'react';
import { connect } from "react-redux";
import TodoItem  from "./Todo_item";
import { onAddTask, onAddTitle } from "../redux/reducer";

const TodoList = (props) => {

    const onAddTitle =(e) =>{
        let newTitle = e.currentTarget.value;
        props.onAddTitle(newTitle);

    };
    const onAddTask = () =>{
        let newTask = 	{
            id: props.id,
            title: props.title,
            checked: false
        };
        props.onAddTask(newTask);
    };


    let newTasks = props.tasks.map(task => <TodoItem key={task.id} id={task.id} title={task.title}
                                                         status={task.status}/> );
    return (
        <div>
            <h1>Todo List</h1>
            <div><input onChange={onAddTitle} value={props.title}/>
            <button onClick={onAddTask}>+</button></div>
            <ul>
                {newTasks}
            </ul>
        </div>
    )
};

const mapStatetoProps = (state) =>{
  return {
      tasks: state.tasks,
      id: state.id,
      title: state.title
  }
};


const connectTodolist = connect(mapStatetoProps, {onAddTitle, onAddTask} )(TodoList);

export default connectTodolist;