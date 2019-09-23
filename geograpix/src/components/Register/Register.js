import React, { useState } from 'react';
import axios from 'axios';


import RegisterMap from '../RegisterMap';

let host = process.env.REACT_APP_URL || 'http://localhost:8000';

const Register = () => {
  console.log(host)

  const registerMe = () => {
    window.open(`${host}auth/instagram`, "_self");
    // window.open(`${process.env.REACT_APP_URL}/auth/instagram`, "_self");
  };

  return(
    <>
    <div className="overlay"></div>
    <div className="modal">
      <h1>Geograpics</h1>
      <p>
        Donec efficitur porta vulputate. Vivamus porta consectetur lorem, iaculis cursus eros placerat sed.
        Etiam cursus porttitor consequat.
      </p>
      <button onClick={registerMe}>Register with Instagram</button>
    </div>
    <section className="map">
        <header className="App-header">
          <RegisterMap />
        </header>
    </section>
    </>
  );
};

export default Register;