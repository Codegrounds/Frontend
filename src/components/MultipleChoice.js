import { useState, createContext } from 'react';

export function MultipleChoice() {

	const questions =
	{
		question: 'Which answer correctly creates a varieble?',
		Answers: ['let x = "hello"', 'le x = 1;', 'let = 3.4', 'let x = 4;'],
		correct: 3
	}

	const [clicked, setClicked] = useState(false)
	const [display, setDisplay] = useState(0)

	return (

		<div className="MultipleChoice">

			<div className="MultipleChoiceOuterContainer">

				<div className="Question">

					{questions.question.split()}

				</div>

				{questions.Answers.map((que, i) => (

					<div className="MultipleChoiceInnerContainer" onClick={() => Inside(i)}>
						<div style={{
							textDecoration: 'none', width: '100%', height: '100%',
							borderRadius: '5px', justifyContent: 'center', alignItems: 'center', textAlign: "center",
							backgroundColor: (i != display || !clicked) ? '#646464' : (i == questions.correct) ? "#396b4c" : "#6b3939"
						}}>
							{que}
						</div>
					</div>

				))}

			</div>
		</div>


	);

	function Inside(i) {

		if (!clicked) {
			setClicked(true);

			setDisplay(i);


		}

	}

}


