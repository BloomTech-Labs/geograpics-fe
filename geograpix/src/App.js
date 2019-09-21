import React from 'react';
import { Route } from 'react-router-dom';
import Map from './components/Map';

import Register from './components/Register/Register';
import Register2 from './components/Register/Register2';
import Preloader from './components/Preloader';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Register} />
      <Route exact path="/preloader/" component={Preloader} />
      <Route path="/register/2/" component={Register2} />
      <section class="map">
        <header class="App-header">
          <Map />
        </header>
      </section>
    </div>
  );
};

export default App;
