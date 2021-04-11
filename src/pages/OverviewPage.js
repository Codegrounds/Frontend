import React from 'react';
import 'codegrounds/styles/App.css';
import { Link } from "react-router-dom";

function OverviewPage() {
	return (
		<div className="OverviewPage">

			<p className="OverviewPageCourses">
				Courses
			</p>

			<view className="OverviewPageButtonContainer">

				<Link to="/lessons" style={{ textDecoration: 'none' }}>
					<div className="OverviewPageButton">
						Javascript
                        </div>
				</Link>

				<Link to="/lessons" style={{ textDecoration: 'none' }}>
					<div className="OverviewPageButton">
						NA
                        </div>
				</Link>

				<Link to="/lessons" style={{ textDecoration: 'none' }}>
					<div className="OverviewPageButton">
						NA
                        </div>
				</Link>

			</view>

		</div>
	);
}

export default OverviewPage;
