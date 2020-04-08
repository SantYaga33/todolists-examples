import React from "react";
import { onChangeStatus,  onDeleteTask} from "../redux/reducer";
import { connect } from "react-redux";

const TodoItem = (props) => {

	const onCheckedChanges = (e) =>{
		props.onChangeStatus (props.id, e.currentTarget.checked );
	};

	const onDeleteTask = () =>{
		props.onDeleteTask(props.id);

	};

	return (
		<li id={props.id} ><input type="checkbox" checked={props.status} onChange={onCheckedChanges}/> {props.title}
																	<button onClick={onDeleteTask}>X</button></li>
	)

};


const connectTodoItem = connect(null, {onDeleteTask, onChangeStatus})(TodoItem);

export default connectTodoItem;

