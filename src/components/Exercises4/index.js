import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default function Exercises4() {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showResult, setShowResult] = useState(false);

	const handleDeleteData = () => {
		setShowResult(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password || !confirmPassword) {
			setShowResult(false);
			return setError('Your inputs must have values ...');
		}

		if (password !== confirmPassword) {
			setShowResult(false);
			return setError('Your have to re-type your password correctly ...');
		}
		setError('');
		setShowResult(true);
	};
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>

			<form onSubmit={handleSubmit} className='form-container'>
				<div className='input-row'>
					<label htmlFor='email-input'>Email</label>
					<input
						id='email-input'
						placeholder='Email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='input-row'>
					<label htmlFor='email-input'>Password</label>
					<input
						id='password-input'
						placeholder='Password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='input-row'>
					<label htmlFor='email-input'>Confirm Password</label>
					<input
						id='confirm-password-input'
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder='Confirm Your Password'
					/>
				</div>

				<input type='submit' value='Submit' />
				{error && <p className='signup-error'>{error}</p>}
			</form>

			{showResult && (
				<div className='result'>
					<p>Email:{email}</p>
					<p>Password:{password}</p>
					<p>Confirm Password:{confirmPassword}</p>
					<button className='button' onClick={handleDeleteData}>
						Delete
					</button>
				</div>
			)}
		</div>
	);
}
