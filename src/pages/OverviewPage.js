import React from 'react';
import 'codegrounds/styles/App.css';
import { Link } from "react-router-dom";

function OverviewPage() {
	return (
		<div className="OverviewPage">

			<p className="OverviewPageCourses">
				Courses
			</p>

			<div className="OverviewPageButtonContainer">

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

			</div>

		</div>
	);
}

export default OverviewPage;
