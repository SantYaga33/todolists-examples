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
		{ id: 0, title: 'CSS', status: true },
		{ id: 1, title:'JS', status: true },
		{ id: 2, title: 'REACT', status: false },
		{ id: 3, title: 'REDUX', status: true }
	],
	title: '',
	id: 5
};


export const reducer = (state = initState, action) => {

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
				tasks: state.tasks.filter (task => task.id !== +action.taskId)
			};
		case CHANGE_STATUS:
			return {
				...state,
				tasks: state.tasks.map (task => {
				if(task.id === +action.taskId) {
					return { ...task, status: !!action.status }
				} else {
					return task
				}
				})
			};
		default :
			return state
	}
	return state

};