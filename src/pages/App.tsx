import 'codegrounds/styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";
import { GlobalProvider } from 'codegrounds/state';
import LoginPage from "./LoginPage";
import LessonOverview from "./LessonOverview";
import { MultipleChoice } from '../components';


export function App() {
	return (
		<Router>
			<GlobalProvider>
				<Switch>

					<Route path='/' exact component={LoginPage} />
					<Route path='/overview' exact component={OverviewPage} />
					<Route path='/lesson/:lessonID' component={LessonPage} />
					<Route path='/lessons' exact component={LessonOverview} />
					<Route path='/test' exact component={MultipleChoice} />


				</Switch>
			</GlobalProvider>
		</Router>
	);
}

export default App;
