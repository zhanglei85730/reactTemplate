import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import routes from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {           
            routes.map((item,index) => {
              return (                
                <Route {...item} key={index}/>
              );
            })
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
