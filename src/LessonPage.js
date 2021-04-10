
import './App.css';
import {Link} from "react-router-dom";
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

                <Link to="/code" style={{ textDecoration: 'none' }}>
                    <div className="LessonPageButton">
                        Javascript
                    </div>
                </Link>
            </h1>
        </div>
    );
}

export default LessonPage;
