import Editor from "@monaco-editor/react";
import React, { useRef, useState } from 'react';
import { v4 } from 'uuid';
import 'codegrounds/styles/App.css';
import {Console} from "codegrounds/components";

function CodingPage({ lesson }) {

	const editorRef = useRef(null);
	const [consoleOpen, setConsoleOpen] = useState(false);
	const [consoleOutput, setConsoleOutput] = useState('')

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;
	}

	async function handleEditorChange(value, event) {
		const response = await fetch('http://codegrounds.tale.me:1000/editor/save', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify({
				lesson_id: lesson.id,
				code_data: value ? value : editorRef.current.getValue()
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		console.log(response)
	}

	async function updateConsole(response) {
		if (response.status === 200) {
			const body = await response.json()
			if (body.data.stdOutput !== 'Unavailable') {
				setConsoleOutput(consoleOutput.concat('Output >\n', body.data.stdOutput, '\n'))
			}

			if (body.data.stdError !== 'Unavailable') {
				setConsoleOutput(consoleOutput.concat('Error >\n', body.data.stdError, '\n'))
			}
		} else {
			console.log('Error fetching the API')
		}
	}

	const runFile = async () => {
		setConsoleOutput(consoleOutput.concat(`[${new Date().toLocaleTimeString()}] Running File >\n`))
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

		await updateConsole(response)
	}

	const testFile = async () => {
		setConsoleOutput(consoleOutput.concat(`[${new Date().toLocaleTimeString()}] Testing File >\n`))
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

		await updateConsole(response)
	}

	const submitFile = async () => {
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
			const data = await response.json()
			if (data.validation === true) {
				const submission = await fetch('https://codegrounds.tale.me:1000/editor/status', {
					method: 'POST',
					credentials: 'include',
					body: JSON.stringify({
						lesson_id: lesson.id,
						status: 'completed',
						code_data: editorRef.current.getValue()
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})

				console.log(await submission.json())
			} else {
				const submission = await fetch('http://codegrounds.tale.me:1000/editor/status', {
					method: 'POST',
					credentials: 'include',
					body: JSON.stringify({
						lesson_id: lesson.id,
						status: 'in_progress',
						code_data: editorRef.current.getValue()
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})

				console.log(await submission.json())
			}
		} else {
			console.log('API Error Submitting')
		}
	}

	return (
		<div>
			<div className="CodingTopBar">
				<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<p className="CodingHeader">{lesson.name}</p>
				</div>
				<div className="CodingTopButton" onClick={runFile}>Run</div>
				<div className="CodingTopButton" onClick={testFile}>Test</div>
				<div className="CodingTopButton" onClick={submitFile}>Submit</div>
			</div>
			<Editor
				onMount={handleEditorDidMount}
				onChange={handleEditorChange}
				theme="vs-dark"
				width="90vw"
				height={consoleOpen ? '72vh' : '92vh'}
				defaultLanguage="javascript"
				defaultValue={lesson.shell_code}
			/>
			<Console open={consoleOpen} setOpen={setConsoleOpen} contents={consoleOutput}/>
		</div>
	);
}

export default CodingPage;
