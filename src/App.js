import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Message from './components/Message';

function App() {
  

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
      <Route path="/:name" component={Message} />
      </div>
    </Router>
    
  );
}

export default App;
