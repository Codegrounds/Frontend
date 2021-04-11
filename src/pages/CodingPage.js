import Editor from "@monaco-editor/react";
import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';
import 'codegrounds/styles/App.css';
import {Console} from "codegrounds/components";

function CodingPage({ lesson }) {

	const editorRef = useRef(null);
	const [consoleOpen, setConsoleOpen] = useState(true);

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	const runFile = async () => {
		const response = await fetch('https://api-codegrounds.atale.me/v1/runner/javascript', {
			method: 'POST',
			body: JSON.stringify({
				transaction_id: v4(),
				code_data: editorRef.current.getValue()
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (response.status === 200) {
			console.log(await response.json())
		} else {
			console.log('Error fetching the API')
		}
	}

	const testFile = async () => {
		const response = await fetch('https://api-codegrounds.atale.me/v1/validate/javascript', {
			method: 'POST',
			body: JSON.stringify({
				transaction_id: v4(),
				code_data: editorRef.current.getValue(),
				lesson_id: 'lesson_2'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (response.status === 200) {
			console.log(await response.json())
		} else {
			console.log('Error fetching the API')
		}
	}

	return (
		<div>
			<div className="CodingTopBar">
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<p className="CodingHeader">{lesson.name}</p>
				</div>
				<div className="CodingTopButton" onClick={() => console.log('Save')}>Save</div>
				<div className="CodingTopButton" onClick={runFile}>Run</div>
				<div className="CodingTopButton" onClick={testFile}>Test</div>
				<div className="CodingTopButton" onClick={() => console.log('Submit')}>Submit</div>
			</div>
			<Editor
				onMount={handleEditorDidMount}
				theme="vs-dark"
				width="90vw"
				height={consoleOpen ? '72vh' : '92vh'}
				defaultLanguage="javascript"
				defaultValue="// some comment"
			/>
			<Console open={consoleOpen} setOpen={setConsoleOpen} contents={"hi\nsup\nyo\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat\nwhat"}/>
		</div>
	);
}

export default CodingPage;
