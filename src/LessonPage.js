import './App.css';
import React, {useContext} from "react";
import {LessonsContext} from "./LessonsContext";
import LessonNavSidebar from "./LessonNavSidebar";
import Editor from "@monaco-editor/react";

function LessonPage(props) {

    const {lessonID} = props.match.params
    const [lessons] = useContext(LessonsContext)
    const lessonName = lessons[lessonID]

    return (
        <div className="LessonPage">

            <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
                <LessonNavSidebar/>

                <h1>
                    Lesson: {lessonName}
                </h1>
            </div>
        </div>
    );
}

export default LessonPage;
