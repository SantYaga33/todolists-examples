export const ADD_TITLE = '/ui/TodoList/ADD_TITLE';
export const ADD_TASK = '/ui/TodoList/ADD_TASK';
export const DELETE_TASK = '/ui/TodoItem/DELETE_TASK';
export const CHANGE_STATUS = '/ui/TodoItem/CHANGE_STATUS';

export const onAddTitle = (newTitle) =>({ type:ADD_TITLE, newTitle });
export const onAddTask = (newTask) =>({ type:ADD_TASK, newTask });
export const onDeleteTask = (taskId) =>({ type:DELETE_TASK, taskId });
export const onChangeStatus = (taskId, status) =>({ type:CHANGE_STATUS, taskId, status });

let initState = {
	tasks: [],
	title: '',
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
				title: ''
			}
		case DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter (task => task.id !== action.taskId)
			};
		case CHANGE_STATUS:
			return {
				...state,
				tasks: state.tasks.map (task => {
				if(task.id === action.taskId) {
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