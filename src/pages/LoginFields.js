import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'codegrounds/styles/App.css';

export function LoginFields() {
	let history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault()

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
			<h1 style={{color: 'white', fontSize: 40}}>
				Log In
			</h1>
			<div className="LoginPageContainer">
				<form onSubmit={handleSubmit}>
					<div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent: 'flex-end', color: 'white'}}>
						Username:
                  		<input className="LoginInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div style={{display:'flex',flexDirection:'row', justifyContent: 'flex-end',alignItems:'center', color: 'white'}}>
						Password:
                    	<input className="LoginInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>

					<input className="LoginSubmit" type="submit" value="Submit" />
				</form>

			</div>
		</div>
	);
}
