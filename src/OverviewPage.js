import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function OverviewPage() {
    return (
        <div className="OverviewPage">
            <h1>
                Courses

                <Link to="/lessons" style={{ textDecoration: 'none' }}>
                    <div className="LessonPageButton">
                        Javascript
                    </div>
                </Link>
            </h1>
        </div>
    );
}

export default OverviewPage;
