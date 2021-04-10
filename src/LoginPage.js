import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function LoginPage() {
    return (
        <div className="LoginPage">
            <h1>
                Lessons

                <Link to="/overview" style={{ textDecoration: 'none' }}>
                    <div className="LessonPageButton">
                        Overview Page
                    </div>
                </Link>

            </h1>
        </div>
    );
}

export default LoginPage;
