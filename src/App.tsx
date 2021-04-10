import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LessonPage from "./LessonPage";
import OverviewPage from "./OverviewPage";


function App() {
  return (
      <Router>
          <Switch>
            <Route path ='/' exact component={OverviewPage}/>
            <Route path ='/lessons' component={LessonPage}/>
          </Switch>
      </Router>
  );
}

export default App;
