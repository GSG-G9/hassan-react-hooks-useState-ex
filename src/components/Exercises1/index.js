import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Exercises1() {
	const [counter, setCounter] = useState(0);
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>

			<div>
				<button onClick={() => setCounter(counter + 1)}>+</button>
				<p>Counter : {counter}</p>
				<button onClick={() => setCounter(counter - 1)}>-</button>
				<br />
				<button onClick={() => setCounter(0)}>Reset</button>
			</div>
		</div>
	);
}
