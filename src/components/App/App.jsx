import React from 'react';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';


import './App.scss';


function App() {
  return (
		<section class="todoapp">
			<h1>todos</h1>
			<NewTaskForm />
			<section class="main">
				<TaskList />
				<Footer />
			</section>
		</section>
  );
}

export default App;
