import 'codegrounds/styles/App.css';
import React, { useContext, useRef } from "react";
import { LessonsContext } from "codegrounds/state";
import { LessonNavSidebar, MultipleChoice } from "codegrounds/components";
import CodingPage from "./CodingPage";
import Loader from 'react-loader-spinner';


import MDReactComponent from 'markdown-react-js';

function LessonPage(props) {

	const { lessonID } = props.match.params
	const { lessons } = useContext(LessonsContext)
	const lesson = lessons[lessonID]

	return lesson !== undefined ? (
		<div className="LessonPage" style={{ overflow: 'hidden' }}>
			<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
				<LessonNavSidebar currentLessonID={lessonID} />


				{lesson.type === 'code' ? <CodingPage lesson={lesson}/> : lesson.type === 'mc' ? <MultipleChoice multipleChoice={lesson} /> :
					<div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
						<div className="LessonHeader">
							{lesson.name}
						</div>

						<div className="LessonMarkdownPage">
							<MDReactComponent text={lesson.markdown} tags={{
								html: 'span', // root node, replaced by default
								strong: 'b',
								em: 'i',
							}} />
						</div>
					</div>
				}
			</div>
		</div>
	) : (
		<div className="LessonPage" style={{justifyContent: 'center', alignItems: 'center'}}>
			<Loader type="ThreeDots" color="#666688" height={80} width={80}/>
		</div>
	)
}

export default LessonPage;
