import React from 'react'
import Task from '../Task';

import './TaskList.scss';

const TaskList = ({ props }) => {
	const elems = props.map((item) => {
		return (
			<li key={item.id} className={item.className}>
				<Task />
				<input type="text" className="edit" value="Editing task" />
			</li>
		)
	})

	return (
		<ul className="todo-list">
			{ elems }
		</ul>
	)
}

export default TaskList
