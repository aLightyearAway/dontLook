import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Message from './components/Message';

function App() {
  

  return (
    <Router>
      <div className="App">
      <Route path={process.env.PUBLIC_URL + '/:name'} component={Message} />
      </div>
    </Router>
    
  );
}

export default App;
