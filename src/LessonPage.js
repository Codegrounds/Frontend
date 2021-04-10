import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function LessonPage() {
    return (
        <div className="LessonPage">
            <h1>
                Lessons

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
