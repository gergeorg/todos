import React from 'react';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';


import './App.scss';

const taskClasses = [
	{className: 'completed', id: 1,},
	{className: 'editing', id: 2,},
	{className: undefined, id: 3},
]


function App() {



  return (
		<section className="todoapp">
			<h1>todos</h1>
			<NewTaskForm />
			<section className="main">
				<TaskList props={taskClasses}/>
				<Footer />
			</section>
		</section>
  );
}

export default App;
