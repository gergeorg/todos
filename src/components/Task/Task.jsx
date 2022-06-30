import React from 'react'

import './Task.scss';

const Task = () => {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" />
			<label>
				<span className="description">Editing task</span>
				<span className="created">created 5 minutes ago</span>
			</label>
			<button className="icon icon-edit"></button>
			<button className="icon icon-destroy"></button>
		</div>
	)
}

export default Task
