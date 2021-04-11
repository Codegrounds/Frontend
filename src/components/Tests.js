import {useEffect, useState} from "react";

export function Tests({ open, setOpen, lessonId, tested, values }) {
	useEffect(async () => {
		const res = await fetch(`https://codegrounds.atale.me/v1/lesson?id=${lessonId}`)
		const data = await res.json()
		setQuestions(data.data.expected_output)

		if (values.length > 0) {
			for (let i = 0; i < values.length; i++) {
				if (values[i] === questions[i]) {
					const list = correct
					list[i] = true
					setCorrect(list)
				} else {
					const list = correct
					list[i] = false
					setCorrect(list)
				}
			}
		}
	});

	const [questions, setQuestions] = useState([])
	const [correct, setCorrect] = useState([])

	return (

		<div className="Tests">

			<div className="TestsContainer" style={{ width: !open ? '5.5vw' : null }}>

				<header className="CheckText">
					Tests
				</header>

				{open ?

					questions.map((que, i) => (

						<header className="CheckContainer" style={{ backgroundColor: !tested ? '#313434' : correct[i] ? "#396b4c" : "#6b3939" }}>
							{que}
						</header>

					))

					: null}

				<div className="RightButton" onClick={() => setOpen(!open)} />

			</div>

		</div>

	);
}


