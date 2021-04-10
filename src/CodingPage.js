import Editor from "@monaco-editor/react";
import React from 'react';
import './App.css';

function CodingPage({lesson}) {
    return (
        <div>
            <div className="CodingTopBar">
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p className="CodingHeader">{lesson.name}</p>
                </div>
                <div className="CodingTopButton" onClick={() => console.log('Run')}>Run</div>
                <div className="CodingTopButton" onClick={() => console.log('Test')}>Test</div>
                <div className="CodingTopButton" onClick={() => console.log('Submit')}>Submit</div>
            </div>
            <Editor
                theme="vs-dark"
                width="90vw"
                height="95%"
                defaultLanguage="javascript"
                defaultValue="// some comment"
            />
        </div>
    );
}

export default CodingPage;
