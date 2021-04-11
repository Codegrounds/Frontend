import { useState, createContext } from 'react';
import { generateLesson } from 'codegrounds/utils';

export const LessonsContext = createContext();

export const LessonsProvider = (props) => {

	const toID = (lessonName) => { // replaces spaces with dashes and makes lowercase
		return lessonName.replace(/\s+/g, '-').toLowerCase();
	}

	const toDict = (nameList) => {
		const dict = {}
		nameList.forEach(lessonData => {
			let id = toID(lessonData.name)
			dict[id] = { name: lessonData.name, type: lessonData.type ? lessonData.type : 'lesson', markdown: generateLesson(lessonData.name) }
		})
		return dict;
	}

	const [lessons, setLessons] = useState(toDict([
		{ name: 'Lesson 1' },
		{ name: 'Lesson 2' },
		{ name: 'Lesson 3' },
		{ name: 'Debug', type: 'code' },
		{ name: 'Unit Test' },
	]))

	return <LessonsContext.Provider value={[lessons, setLessons]}>{props.children}</LessonsContext.Provider>;
}
