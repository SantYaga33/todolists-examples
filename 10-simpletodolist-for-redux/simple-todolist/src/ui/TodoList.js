import React from 'react';
import { connect } from "react-redux";
import TodoItem  from "./Todo_item";
import { onAddTaskeAC, onAddTitleAC, onChangeStatusAC, onDeleteTaskAC } from "../redux/reducer";

const TodoList = (props) => {

    const onAddTitle =(e) =>{
        let newTitle = e.currentTarget.value;
        props.onAddTitleStore(newTitle);

    };
    const onAddTask = () =>{
        let newTask = 	{
            id: props.id,
            title: props.title,
            checked: false
        };
        props.onAddTaskStore(newTask);
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
const mapdispatchtoProps = (dispatch) =>{
  return {
      onAddTitleStore: (newTitle) =>{
          const action = onAddTitleAC(newTitle);
          dispatch(action);
      },
      onAddTaskStore: (newTask) =>{
          const action = onAddTaskeAC(newTask);
          dispatch(action);
      },
      // onDeleteTaskStore: (taskId) =>{
      //     const action = onDeleteTaskAC(taskId);
      //     dispatch(action);
      // },
      // onChangeStatusStore: (taskId, status) =>{
      //     const action = onChangeStatusAC(taskId, status);
      //     dispatch(action);
      // }
    }
};

const connectTodolist = connect(mapStatetoProps, mapdispatchtoProps )(TodoList);

export default connectTodolist;