import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";
import LoginPage from "./LoginPage";


function App() {
  return (
      <Router>
          <Switch>
            <Route path ='/' exact component={OverviewPage}/>
            <Route path ='/login' exact component={LoginPage}/>
            <Route path ='/lessons' component={LessonPage}/>
          </Switch>
      </Router>
  );
}

export default App;
