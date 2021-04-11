import { useState } from "react";

export function Tests({ open, setOpen }) {

	const questions = ['(0, 0) == true', '(0, 1) == true', '(1, 0) == false', '(1, 1) == true']

	const [correct, setCorrect] = useState([false, false, false, false])
	const [tested, setTested] = useState(false)

	return (

		<div className="Tests">

			<div className="TestsContainer" style={{ width: !open ? '5vw' : null }}>

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

function Correct() {

	setTested(true)

	let temp = []

	for (let x = 0; x < 4; x++) {

		temp.push((int)(Math.random() * 2) === 1)
	}

	setCorrect(temp)

}


