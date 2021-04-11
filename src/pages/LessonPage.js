import 'codegrounds/styles/App.css';
import React, { useContext } from "react";
import { LessonsContext } from "codegrounds/state";
import { LessonNavSidebar } from "codegrounds/components";
import Editor from "@monaco-editor/react";
import CodingPage from "./CodingPage";

function LessonPage(props) {

	const { lessonID } = props.match.params
	const [lessons] = useContext(LessonsContext)
	const lesson = lessons[lessonID]

	return (
		<div className="LessonPage" style={(lesson.type === 'code') ? {overflow: 'hidden'} : null}>

			<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
				<LessonNavSidebar currentLessonID={lessonID} />


				{lesson.type === 'code' ? <CodingPage lesson={lesson} /> :
					<div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
						<div className="LessonHeader">
							{lesson.name}
						</div>
						{lesson.page}
					</div>
				}
			</div>
		</div>
	);
}

export default LessonPage;
