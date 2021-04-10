import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";
import GlobalProvider from "./GlobalContext";
import CodingPage from "./CodingPage";
import LoginPage from "./LoginPage";


function App() {
  return (
      <Router>
          <GlobalProvider>
              <Switch>
                  <Route path ='/code' exact component={CodingPage}/>
                  <Route path ='/overview' component={OverviewPage}/>
                  <Route path ='/lessons' component={LessonPage}/>
                  <Route path ='/' exact component={LoginPage}/>
              </Switch>
          </GlobalProvider>
      </Router>
  );
}

export default App;
