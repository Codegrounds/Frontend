import 'codegrounds/styles/App.css';
import React, { useContext, useRef } from "react";
import { LessonsContext } from "codegrounds/state";
import { LessonNavSidebar, MultipleChoice } from "codegrounds/components";
import CodingPage from "./CodingPage";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import MDReactComponent from 'markdown-react-js';

function LessonPage(props) {

	const { lessonID } = props.match.params
	const { lessons } = useContext(LessonsContext)
	const lesson = lessons[lessonID]

	return lesson !== undefined ? (
		<div className="LessonPage" style={(lesson.type === 'code') ? {overflow: 'hidden'} : {overflowX: 'hidden'}}>
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
		<div className="LessonPage">
			<p>
				Loading
			</p>
		</div>
	)
}

export default LessonPage;
