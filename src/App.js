import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled", "success");
    }
  }

  const HandleBlueTheme = () => {
    document.body.style.backgroundColor = '#00b3ff';
    showAlert(" Blue theme has been enabled", "success");
    setMode('info')

  }

  const HandleGreyTheme = () => {
    document.body.style.backgroundColor = '#98a2a6';
    showAlert(" Grey theme has been enabled", "success");
    setMode('secondary')
  }

  const HandleMustardTheme = () => {
    document.body.style.backgroundColor = '#ebc034';
    showAlert(" Mustard theme has been enabled", "success");
    setMode('warning')
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils.io" AboutText="About TextUtils.io" mode={mode} toggleMode={toggleMode} HandleBlueTheme={HandleBlueTheme} HandleGreyTheme={HandleGreyTheme} HandleMustardTheme={HandleMustardTheme} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          <Routes>
            <Route exact path="/" element={<Textarea heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
            <Route exact path="about" element={<About mode={mode} />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;