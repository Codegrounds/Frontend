import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'codegrounds/styles/App.css';

export function SignupFields() {
	let history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault()

		const signupResult = await fetch('https://codegrounds.atale.me/v1/authentication/signup', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				username: username,
				password: password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		console.log(signupResult)
		console.log(await signupResult.json())

		const loginResult = await fetch('https://codegrounds.atale.me/v1/authentication/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				username: username,
				password: password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		console.log(loginResult)
		console.log(await loginResult.json())

		const testResult = await fetch('https://codegrounds.atale.me/v1/authentication/test', {
			method: 'POST',
			credentials: 'include'
		})

		console.log(testResult)
		console.log(await testResult.json())

		if (testResult.status === 200) {
			history.push('/lessons')
		}
	}

	return (
		<div className="LoginPage">

			<div className="LoginPageContainer">
				<form onSubmit={handleSubmit}>
					<div>
						Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div>
						Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>

					<input type="submit" value="Submit" style={{ width: '50%', height: '20%' }} />
				</form>

			</div>
		</div>
	);
}
