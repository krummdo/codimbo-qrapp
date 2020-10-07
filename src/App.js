import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  QrReader,
  QrPrint,
  Home,
} from './components'

function App() {
  return (
    <div className="App">
      <div className="App-Body">
        <Router>
          <div>
            <Switch>
              <Route path="/read">
                <QrReader />
              </Route>
              <Route path="/print">
                <QrPrint />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
