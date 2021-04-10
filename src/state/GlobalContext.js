import { LessonsProvider } from "./LessonsContext";

export function GlobalProvider(props) {

	return (
		<LessonsProvider>
			{props.children}
		</LessonsProvider>
	);
}
