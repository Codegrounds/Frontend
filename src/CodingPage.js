import Editor from "@monaco-editor/react";
import React from 'react';
import './App.css';
import LessonNavSidebar from "./LessonNavSidebar";

function CodingPage() {
    return (
        <Editor
            theme="vs-dark"
            width="90vw"
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// some comment"
        />
    );
}

export default CodingPage;
