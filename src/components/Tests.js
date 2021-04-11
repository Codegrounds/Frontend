import { useState } from "react";

export function Tests() {

	const questions = ['(0, 0) == true', '(0, 1) == true', '(1, 0) == false', '(1, 1) == true']


	const [correct, setCorrect] = useState([false, false, false, false])
	const [tested, setTested] = useState(false)

	return (

		<div className="Tests">

			<div className="TestsContainer">

				<header className="CheckText">
					Tests
				</header>

				{questions.map((que, i) => (

					<header className="CheckContainer" style={{ backgroundColor: !tested ? '#313434' : correct[i] ? "#396b4c" : "#6b3939" }}>
						{que}
					</header>

				))}
			</div>

		</div>

	);
}

function Correct() {

	setTested(true)

	let temp = [false, false, false, false]

	for (let x = 0; x < 4; x++) {

		temp[x]((int)(Math.random() * 2) === 1)
	}

	setCorrect(temp)

}


