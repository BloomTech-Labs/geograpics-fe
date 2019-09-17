import React, { useState } from 'react';

const HelloWorld = () => {

  const [formFields, setFormFields] = useState({
      username: '',
      password: ''
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setFormFields( {
        ...formFields,
        [e.target.name] : e.target.value
    });
  };

  const handleSubmit  =  e => {
      e.preventDefault();
      alert(`${formFields.username}, ${formFields.password}`);
  }

  return(
    <div className="modal">
      <h1>Welcome to the App</h1>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input type="text" name="username" id="username" placeholder="username" onChange={onChangeHandler} value={formFields.username} />
            <label htmlFor="username">
                username
            </label>
        </div>
          <div className="group">
            <input type="password" name="password" id="password" placeholder="password" onChange={onChangeHandler} value={formFields.password} />
            <label htmlFor="password">
                password
            </label>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default HelloWorld;