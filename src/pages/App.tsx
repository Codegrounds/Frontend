import 'codegrounds/styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";
import { GlobalProvider, Loader } from 'codegrounds/state';
import LoginPage from "./LoginPage";
import LessonOverview from "./LessonOverview";
import { MultipleChoice, Tests } from '../components';
import { LoginFields } from "./LoginFields";
import { SignupFields } from './SignupFields'
import { LogoutFields } from './LogoutFields'


export function App() {
	return (
		<Router>
			<GlobalProvider>
				<Loader>
					<Switch>

						<Route path='/' exact component={LoginPage} />
						<Route path='/login' exact component={LoginFields} />
						<Route path='/signup' exact component={SignupFields} />
						<Route path='/logout' exact component={LogoutFields} />
						<Route path='/lesson/:lessonID' component={LessonPage} />
						<Route path='/lessons' exact component={LessonOverview} />
						<Route path='/test' exact component={Tests} />


					</Switch>
				</Loader>
			</GlobalProvider>
		</Router>
	);
}

export default App;
