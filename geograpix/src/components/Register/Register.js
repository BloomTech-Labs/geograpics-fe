import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

  const registerMe = () => {
    window.open("https://geograpics-staging.herokuapp.com/auth/instagram", "_self");
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
    </>
  );
};

export default Register;