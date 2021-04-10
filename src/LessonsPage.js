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

            <view className="LessonButtonOuterContainer">

                <view className="LessonButtonInnerContainer">
                    {Object.keys(lessons).slice(0, 3).map(lessonID => (
                        <Link to={'/lesson/'+lessonID} style={{textDecoration: 'none', color: 'black'}}>
                            <div className={"LessonButton"}>
                                <p>{lessons[lessonID].name}</p>
                            </div>
                        </Link>
                    ))}
                </view>

                <view className="LessonButtonInnerContainer">
                    {Object.keys(lessons).slice(3, 5).map(lessonID => (
                        <Link to={'/lesson/'+lessonID} style={{textDecoration: 'none', color: 'black'}}>
                            <div className={"LessonButton"}>
                                <p>{lessons[lessonID].name}</p>
                            </div>
                        </Link>
                    ))}
                </view>

            </view>
        </div>
    );
}

export default LessonsPage;
