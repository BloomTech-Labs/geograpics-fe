import React from 'react';
import { Route } from 'react-router-dom';
import Map from './components/Map';

import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <section class="map">
        <header class="App-header">
          <Map />
        </header>
      </section>
    </div>
  );
}

export default App;
