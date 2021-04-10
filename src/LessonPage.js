import './App.css';
import {useContext} from "react";
import {LessonsContext} from "./LessonsContext";

function LessonPage(props) {

    const {lessonID} = props.match.params
    const [lessons] = useContext(LessonsContext)
    const lessonName = lessons[lessonID]

    return (
        <div className="LessonPage">
            <h1>
                Lesson: {lessonName}
            </h1>
        </div>
    );
}

export default LessonPage;
