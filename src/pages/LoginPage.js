import React from 'react';
import 'codegrounds/styles/App.css';
import { Link } from "react-router-dom";
import { MultipleChoice } from '../components';

function LoginPage() {
	return (
		<div className="LoginPage">

			<div>
				{MultipleChoice}
			</div>

			<div className="LoginPageButtonContainer">

				<Link to="/login" style={{ textDecoration: 'none' }}>
					<p className="LoginPageButton">
						Login
                    </p>
				</Link>


				<Link to="/signup" style={{ textDecoration: 'none' }}>
					<div className="LoginPageButton">
						Create Account
                    </div>
				</Link>

			</div>

		</div>
	);
}

export default LoginPage;
