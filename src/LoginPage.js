import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function LoginPage() {
    return (
        <div className="LoginPage">

            <view className="LoginPageButtonContainer">

                <Link to="/overview" style={{ textDecoration: 'none' }}>
                    <div className="LoginPageButton">
                        Login
                    </div>
                </Link>


                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <div className="LoginPageButton">
                        Create Account
                    </div>
                    </Link>

            </view>

                
        </div>
    );
}

export default LoginPage;
