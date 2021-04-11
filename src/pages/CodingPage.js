import Editor from "@monaco-editor/react";
import React, { useRef, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import 'codegrounds/styles/App.css';
import { Console, Tests } from "codegrounds/components";

function CodingPage({ lesson }) {
	const editorRef = useRef(null);
	const scrollDownConsole = useRef(null);
	const [consoleOpen, setConsoleOpen] = useState(false);
	const [testOpen, setTestOpen] = useState(true);
	const [consoleOutput, setConsoleOutput] = useState('')
	const [submittedStatus, setSubmittedStatus] = useState(false)

	useEffect(async () => {
		const statusResult = await fetch(`https://codegrounds.atale.me/v1/editor/status?id=${lesson.id}`, {
			credentials: 'include',
		})

		const statusJson = await statusResult.json()
		setSubmittedStatus(statusJson.data.status)
	});

	async function handleEditorDidMount(editor, monaco) {
		const saveResult = await fetch(`https://codegrounds.atale.me/v1/editor/save?id=${lesson.id}`, {
			credentials: 'include',
		})

		const saveJson = await saveResult.json()
		editor.setValue(saveJson.data.status)
		editorRef.current = editor;
	}

	async function handleEditorChange(value, event) {
		const response = await fetch('https://codegrounds.atale.me/v1/editor/save', {
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

	const openConsole = () => {
		setConsoleOpen(true)
		scrollDownConsole.current()
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
		const response = await fetch('https://codegrounds.atale.me/v1/runner/javascript', {
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
		openConsole()
	}

	const testFile = async () => {
		setConsoleOutput(consoleOutput.concat(`[${new Date().toLocaleTimeString()}] Testing File >\n`))
		const response = await fetch('https://codegrounds.atale.me/v1/validate/javascript', {
			method: 'POST',
			body: JSON.stringify({
				transaction_id: v4(),
				code_data: editorRef.current.getValue(),
				lesson_id: lesson.id
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		await updateConsole(response)
		openConsole()
	}

	const submitFile = async () => {
		const response = await fetch('https://codegrounds.atale.me/v1/validate/javascript', {
			method: 'POST',
			body: JSON.stringify({
				transaction_id: v4(),
				code_data: editorRef.current.getValue(),
				lesson_id: lesson.id
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (response.status === 200) {
			const data = await response.json()
			if (data.data.validation === true) {
				const submission = await fetch('https://codegrounds.atale.me/v1/editor/status', {
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
				const submission = await fetch('https://codegrounds.atale.me/v1/editor/status', {
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
				<div className="CodingTopButton" onClick={submitFile} style={submittedStatus ? { backgroundColor: '#11ff11' } : null}>{submittedStatus ? 'Submitted' : 'Submit'}</div>
			</div>
			<div className="RightBar">
				<div className="IDE">
					<Editor
						onMount={handleEditorDidMount}
						onChange={handleEditorChange}
						theme="vs-dark"
						width={testOpen ? "75vw" : "90vw"}
						height={consoleOpen ? '71vh' : '92vh'}
						defaultLanguage="javascript"
						defaultValue={lesson.shell_code}
					/>
					<Console open={consoleOpen} setOpen={setConsoleOpen} contents={consoleOutput} scrollDown={scrollDownConsole} />
				</div>
				<Tests open={testOpen} setOpen={setTestOpen} lessonId={lesson.id}/>
			</div>
		</div>
	);
}

export default CodingPage;
