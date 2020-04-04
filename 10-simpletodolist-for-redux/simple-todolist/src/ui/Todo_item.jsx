import React from "react";
import {  onChangeStatusAC, onDeleteTaskAC } from "../redux/reducer";
import { connect } from "react-redux";

const TodoItem = (props) => {

	const onCheckedChanges = (e) =>{
		props.onChangeStatusStore (props.id, e.currentTarget.checked );
	};

	const onDeleteTask = (e) =>{
		props.onDeleteTaskStore(props.id);

	};

	return (
		<li  id={props.id} ><input type="checkbox" checked={props.status} onChange={onCheckedChanges}/> {props.title}
		<button   onClick={onDeleteTask}>X</button></li>
	)

};


const mapdispatchtoProps = (dispatch) =>{
	return {

		onDeleteTaskStore: (taskId) =>{
			const action = onDeleteTaskAC(taskId);
			dispatch(action);
		},
		onChangeStatusStore: (taskId, status) =>{
			const action = onChangeStatusAC(taskId, status);
			dispatch(action);
		}
	}
};

const connectTodoItem = connect(null, mapdispatchtoProps )(TodoItem);

export default connectTodoItem;

