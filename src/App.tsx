import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";
import GlobalProvider from "./GlobalContext";
import LoginPage from "./LoginPage";
import LessonsPage from "./LessonsPage";


function App() {
  return (
      <Router>
          <GlobalProvider>
              <Switch>
                  <Route path ='/' exact component={LoginPage}/>
                  <Route path ='/overview' exact component={OverviewPage}/>
                  <Route path ='/lesson/:lessonID' component={LessonPage}/>
                  <Route path ='/lessons' exact component={LessonsPage}/>
              </Switch>
          </GlobalProvider>
      </Router>
  );
}

export default App;
