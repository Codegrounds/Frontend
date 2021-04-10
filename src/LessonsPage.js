import React, {useContext} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {LessonsContext} from "./LessonsContext";

function LessonsPage() {

    const [lessons] = useContext(LessonsContext)

    return (
        <div className="LessonPage">
            <h1>
                Lessons
            </h1>

            {Object.keys(lessons).map(lessonID => (
                <Link to={'/lesson/'+lessonID} style={{textDecoration: 'none', color: 'black'}}>
                    <div className={"LessonButton"}>
                        <p>{lessons[lessonID]}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default LessonsPage;
