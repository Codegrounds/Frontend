import React from 'react';
import 'codegrounds/styles/App.css';
import { Link } from "react-router-dom";
import { MultipleChoice } from '../components';

function LoginPage() {
	return (
		<div className="LoginPage">

			<view className="LoginPageButtonContainer">

				<Link to="/overview" style={{ textDecoration: 'none' }}>
					<text className="LoginPageButton">
						Login
                    </text>
				</Link>


				<Link to="/create" style={{ textDecoration: 'none' }}>
					<div className="LoginPageButton">
						Create Account
                    </div>
				</Link>

			</view>


		</div>
	);
}

export default LoginPage;
