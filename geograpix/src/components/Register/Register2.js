import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

import RegisterMap from '../RegisterMap';
import { registration } from '../../store/actions'

export const Register2 = props => {

  const [isPrivate, setIsPrivate] = useState(false);
  const [email, setEmail] = useState();

  // useEffect( () => {
  //     let vars = {};
  //     window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  //         vars[key] = value;
  //     });
  //     localStorage.setItem('token', vars.token);
  //     localStorage.setItem('username', vars.username);
  //     localStorage.setItem('id', vars.userid);
  // }, []);

  const onChangeHandler = e => {
    setEmail(e.target.value);
  };

  const handleSubmit =  e => {
      e.preventDefault();
      console.log('click Button')
      let id = localStorage.getItem('id');
      let username = localStorage.getItem('username')
      props.registration(id, { private: isPrivate, email }, props.history, username);
  };

  const toggleCheck = e => {
    setIsPrivate(!isPrivate);
  }

  return(
    <>
    <div className="overlay">
      <div className="modal page2">
        <div class="head">
          <h1 className="ir">Geograpics</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input type="email" name="email" id="email" placeholder="eMail" onChange={onChangeHandler} value={email} />
            <label htmlFor="username">
                eMail
            </label>
          </div>
          <table className="group check">
            <tbody>
              <td><input type="checkbox" className={isPrivate ? 'on' : 'off'} onClick={toggleCheck} /></td>
              <td><label>Set Account to Private<br /><span>(<em>Only you can view your photos</em>)</span></label></td>
            </tbody>
          </table>
          <button type="submit">Finish Registration</button>
        </form>
      </div>
    </div>
    <section className="map">
        <header className="App-header">
          <RegisterMap />
        </header>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
	console.log(state.register.user)
  
	return {
		isRegistering: state.register.isRegistering,
    error: state.register.error,
    user: state.register.user
	}
}


export default connect(mapStateToProps, {registration})(Register2);