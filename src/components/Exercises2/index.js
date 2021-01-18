import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Exercises2() {
	const colors = ['red', 'blue'];
	const [background, setBackground] = useState();
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>

			<div style={{ backgroundColor: background }}>
				<ul>
					{colors.map((color, index) => (
						<li key={index}>
							<button onClick={() => setBackground(color)}>{color}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
