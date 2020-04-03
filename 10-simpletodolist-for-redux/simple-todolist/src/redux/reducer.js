export const ADD_TITLE = 'ADD_TITLE';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const onAddTitleAC = (newTitle) =>{
	return { type:ADD_TITLE, newTitle }
};
export const onAddTaskeAC = (newTask) =>{
	return { type:ADD_TASK, newTask }
};
export const onDeleteTaskAC = (taskId) =>{
	return { type:DELETE_TASK, taskId }
};
export const onChangeStatusAC = (taskId, status) =>{
	return { type:CHANGE_STATUS, taskId, status }
};

let initState = {
	tasks: [
		{ id: 0, title: 'CSS', checked: true },
		{ id: 1, title:'JS', checked: true },
		{ id: 2, title: 'REACT', checked: false },
		{ id: 3, title: 'REDUX', checked: true }
	],
	title: '',
	id: 5
};


export const reducer = (state = initState, action) => {
	debugger
	switch (action.type ) {
		case ADD_TITLE:
			return {
				...state,
				title: action.newTitle
			};
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.newTask],
				id: state.id +1,
				title: ''
			}
		case DELETE_TASK:
			return {
				...state,
				tasks: [...state.tasks].filter (task => task.id !== action.taskId)
			};
		default :
			return state
	}
	return state

};