import Editor from "@monaco-editor/react";
import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import LessonNavSidebar from "./LessonNavSidebar";

function CodingPage() {
    return (
        <div className="OverviewPage">
            
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
                <LessonNavSidebar/>
                <Editor
                    theme="vs-dark"
                    width="90%"
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                />
            </div>
            
        </div>
    );
}

export default CodingPage;
