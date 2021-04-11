import 'codegrounds/styles/App.css';
import { useContext } from "react";
import { LessonsContext } from 'codegrounds/state';
import { Link } from "react-router-dom";
import arrowImag from 'codegrounds/images/BackArrow.png'


export function LessonNavSidebar({ currentLessonID }) {

	const {lessons} = useContext(LessonsContext)

	return (
		<div className="LessonNavSidebar">
			<div style={{width: '100%', display: 'flex', flexDirection:'row', alignItems: 'center'}}>
				<Link to={'/lessons/'}>
					<img src={arrowImag} style={{width:30, height: 30, cursor: 'pointer', paddingLeft: 10, paddingTop: 10}} alt="back arrow"/>
				</Link>
			</div>
			{Object.keys(lessons).map(lessonID => (
				<Link to={'/lesson/' + lessonID} key={lessonID+'-nav'}
					style={{ textDecoration: 'none', color: (currentLessonID === lessonID) ? 'yellow' : 'white', fontWeight: (currentLessonID === lessonID) ? 'bold' : 'normal' }}>
					<p style={{ marginTop: 20 }}>{lessons[lessonID].name}</p>
				</Link>
			))}
		</div>
	);
}
