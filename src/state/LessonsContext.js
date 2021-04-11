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
			dict[id] = { id, name: lessonData.name, chapter: lessonData.chapter, type: lessonData.type ? lessonData.type : 'lesson', markdown: generateLesson(lessonData.name) }
		})

		return dict;
	}

	const toChapters = (lessonsDict) => {
		const dict = {}
		Object.keys(lessonsDict).forEach(lessonID => {
			let lessonData = lessonsDict[lessonID]
			if (dict[lessonData.chapter] === undefined) {
				dict[lessonData.chapter] = [lessonData]
			} else {
				dict[lessonData.chapter] = [...dict[lessonData.chapter], lessonData]
			}
		})

		return dict;
	}

	const lessonsDict = toDict([
		{ name: 'Lesson 1', chapter: '1.1' },
		{ name: 'Lesson 2', chapter: '1.1' },
		{ name: 'Lesson 3', chapter: '1.1' },
		{ name: 'Multiple Choice', chapter: '1.1', type: 'mc' },
		{ name: 'Logic 1', chapter: '1.1' },
		{ name: 'Logic 2', chapter: '1.1' },
		{ name: 'Logic 3', chapter: '1.1' },
		{ name: 'Debug', chapter: '1.1', type: 'code' },
		{ name: 'Unit Test', chapter: '1.1' },
		{ name: 'Lesson 12', chapter: '1.2' },
		{ name: 'Lesson 13', chapter: '1.2' },
		{ name: 'Lesson 14', chapter: '1.2' },
	]);



	const [lessons, setLessons] = useState({})

	const [chapters, setChapters] = useState(toChapters({}))

	return <LessonsContext.Provider value={{ lessons, setLessons, chapters, setChapters }}>{props.children}</LessonsContext.Provider>;
}
