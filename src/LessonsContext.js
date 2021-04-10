import {useState, createContext} from 'react';

export const LessonsContext = createContext();

export const LessonsProvider = (props) => {
    const [lessons, setLessons] = useState([
        'lesson 1',
        'lesson 2',
        'lesson 3',
        'Debug',
        'Unit Test',
    ])

    return <LessonsContext.Provider value={[lessons, setLessons]}>{props.children}</LessonsContext.Provider>;
}
