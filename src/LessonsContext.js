import {useState, createContext} from 'react';

export const LessonsContext = createContext();

export const LessonsProvider = (props) => {

    const toID = (lessonName) => { // replaces spaces with dashes and makes lowercase
        return lessonName.replace(/\s+/g, '-').toLowerCase();
    }

    const toDict = (nameList) => {
        const dict = {}
        nameList.forEach(lessonName => {
            dict[toID(lessonName)] = lessonName
        })
        return dict;
    }

    const [lessons, setLessons] = useState(toDict([
        'Lesson 1',
        'Lesson 2',
        'Lesson 3',
        'Debug',
        'Unit Test',
    ]))

    return <LessonsContext.Provider value={[lessons, setLessons]}>{props.children}</LessonsContext.Provider>;
}
