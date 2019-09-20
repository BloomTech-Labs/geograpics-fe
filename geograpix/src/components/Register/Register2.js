import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { registration } from '../../store/actions'

const Register2 = props => {

  const [isPrivate, setIsPrivate] = useState(false);
  const [email, setEmail] = useState();

  useEffect( () => {
      let vars = {};
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      localStorage.setItem('token', vars.token);
      localStorage.setItem('username', vars.username);
      localStorage.setItem('id', vars.userid);
  }, []);

  const onChangeHandler = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit =  e => {
      e.preventDefault();
      let id = localStorage.getItem('id');
      registration(id, { private: isPrivate, email }, props.history);
  };

  const toggleCheck = e => {
    setIsPrivate(!isPrivate);
  }

  return(
    <>
    <div class="overlay"></div>
    <div className="modal page2">
      <h1>Finish Registering</h1>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input type="email" name="email" id="email" placeholder="eMail" onChange={onChangeHandler} value={email} />
          <label htmlFor="username">
              eMail
          </label>
        </div>
        <table class="group check">
          <tbody>
            <td><input type="checkbox" class={isPrivate ? 'on' : 'off'} onClick={toggleCheck} /></td>
            <td><label>Set Account to Private<br /><span>(<em>Only you can view your photos</em>)</span></label></td>
          </tbody>
        </table>
        <button type="submit">Finish Registration</button>
      </form>
    </div>
    </>
  );
};

export default Register2;