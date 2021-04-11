import 'codegrounds/styles/App.css';
import React, { useContext } from "react";
import { LessonsContext } from "codegrounds/state";
import { LessonNavSidebar } from "codegrounds/components";
import CodingPage from "./CodingPage";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import MDReactComponent from 'markdown-react-js';

function LessonPage(props) {

	const markdown = `# Lesson 1: Variables

In javascript there are several different types of variables: integer, double, boolean, and string (there are more than these, but these are the main ones):

integer: a whole number like 1 or -4
double: any number whole or non-whole like 4.31
boolean: a variable that has two states true or false
string: a bunch of characters together like “this is a string”

In order to create one first write 
let (variable name) = (value);
in order to create a string the letters used must be surrounded in quotes

here are some further **examples**

> (integer)
> let iAmAnInt = 5;

> (double)
> let iAmADouble = 2.3;

> (boolean)
> let iAmABoolean = true;

> (string)
> let iAmAString = “hello world”;

`

	const text = `A paragraph with *emphasis* and **strong importance**.
 
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
 
* Lists
* [ ] todo
* [x] done
 
A table:
 
| a | b |
| - | - |`.replace(/\n/gi, '\n &nbsp;');


	const test = 'hi *sup* bro'

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
	);
}

export default LessonPage;
