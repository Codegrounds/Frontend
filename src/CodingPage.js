import Editor from "@monaco-editor/react";
import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function CodingPage() {
    return (
        <div className="OverviewPage">
            <h1>
                Code Stuff
            </h1>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
            />
        </div>
    );
}

export default CodingPage;
