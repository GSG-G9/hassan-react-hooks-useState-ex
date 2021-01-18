import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Exercises3() {
	const [todoText, setTodoText] = useState('');
	const [todos, setTodos] = useState([]);

	const handleDeleteTodo = (todoId) => {
		setTodos(todos.filter(({ id }) => id !== todoId));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoText.trim()) {
			setTodos((state) => {
				console.log(state);
				return [...state, { id: todos.length + 1, description: todoText }];
			});
			setTodoText('');
		}
	};
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>

			<div className='exercises-container'>
				<form onSubmit={handleSubmit}>
					<div className='input-row'>
						<label htmlFor='todo-text'></label>
						<input
							type='text'
							id='todo-text'
							value={todoText}
							onChange={(e) => setTodoText(e.target.value)}
						/>
					</div>
					<div className='input-row'>
						<input type='submit' value='Add' />
					</div>
				</form>
				<div className='todos-list'>
					<ul>
						{todos.map(({ id, description }) => (
							<li key={id}>
								{description}{' '}
								<button onClick={() => handleDeleteTodo(id)}>X</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
