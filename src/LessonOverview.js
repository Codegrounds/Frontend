import React, {useContext} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {LessonsContext} from "./LessonsContext";

function LessonOverview() {

    const [lessons] = useContext(LessonsContext)


    return (
        <div className="LessonPage">
            <h1>
                Lessons
            </h1>

            <div className="LessonButtonOuterContainer">

                {
                    [...Array(Math.ceil(Object.keys(lessons).length / 3)).keys()].map(i =>
                        <div className="LessonButtonInnerContainer">
                            {Object.keys(lessons).slice(i*3, (i+1)*3).map(lessonID => (
                                <Link to={'/lesson/'+lessonID} style={{textDecoration: 'none', color: 'black'}}>
                                    <div className={"LessonButton"}>
                                        <p>{lessons[lessonID].name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                )}

            </div>
        </div>
    );
}

export default LessonOverview;
