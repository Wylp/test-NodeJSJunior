import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Content from '../components/content/Content'


function App() {
  return (
    <div className="App">
        <Logo/>
        <Content />
    </div>
  );
}

export default App;
