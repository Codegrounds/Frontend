import 'codegrounds/styles/App.css';
import { useContext } from "react";
import { LessonsContext } from 'codegrounds/state';
import { Link } from "react-router-dom";



export function LessonNavSidebar({ currentLessonID }) {

	const [lessons] = useContext(LessonsContext)

	return (
		<div className="LessonNavSidebar">
			{Object.keys(lessons).map(lessonID => (
				<Link to={'/lesson/' + lessonID}
					style={{ textDecoration: 'none', color: (currentLessonID === lessonID) ? 'yellow' : 'white', fontWeight: (currentLessonID === lessonID) ? 'bold' : 'normal' }}>
					<p style={{marginTop: 20}}>{lessons[lessonID].name}</p>
				</Link>
			))}
		</div>
	);
}
