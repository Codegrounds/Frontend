
export function MultipleChoice() {

	const questions =
		{ question: 'one', Answers: ['hello', 'hi', 'bye', 'guy'] }


	return (

		<div className="MultipleChoice">
			<div className="MultipleChoiceOuterContainer">

				{questions.Answers.map(question => (

					<div className="MultipleChoiceInnerContainer">
						{question}
					</div>

				))}

			</div>
		</div>


	);
}
