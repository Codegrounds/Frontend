import React, { useContext } from 'react';
import 'codegrounds/styles/App.css';
import { Link } from "react-router-dom";
import { LessonsContext } from "codegrounds/state";

function LessonOverview() {

	const { chapters } = useContext(LessonsContext)


	return (
		<div className="LessonPage">
			<h1>
				Lessons
            </h1>


			{Object.keys(chapters).map(chapter => {
				let lessons = chapters[chapter];
				const buttons = [...Array(Math.ceil(lessons.length / 3)).keys()].map(i =>
					<div className="LessonButtonInnerContainer" key={chapter + '-' + i}>
						{lessons.slice(i * 3, (i + 1) * 3).map(lesson => (
							<Link to={'/lesson/' + lesson.id} style={{ textDecoration: 'none', color: 'black' }} key={lesson.id}>
								<div className={"LessonButton"}>
									<p>{lesson.name}</p>
								</div>
							</Link>
						))}
					</div>)
				return <div className="LessonButtonOuterContainer" key={chapter}>
					{buttons}
				</div>
			})}
		</div>
	);
}

export default LessonOverview;
