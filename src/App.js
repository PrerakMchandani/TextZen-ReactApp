import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)

    }, 1000);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has been enabled" , "success");
      // #6c757d
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
    }

  }


  return (
  <>
    <Router>

    <Navbar title = "TextZen" aboutText = "About Us" mode = {mode}  toggleMode = {toggleMode} />
    <Alert alert = {alert} />
    <div className="container my-3">

    <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path="/">
          <TextForm heading = "Enter the text to analyze"  showAlert = {showAlert}  mode = {mode}    />
          </Route>
        </Switch>
    </div>

    </Router>

  </>

  );
}

export default App;
