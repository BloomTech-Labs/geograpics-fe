import React from 'react';

const Dashboard = (props) => {

    const username = localStorage.getItem('username') 

    const logout = () => {
        localStorage.clear();
		props.history.push('/') 
    }

    return (
        <div>
            <h1> Welcome To Dashboard, {username}</h1>
            <button onClick={logout}> Logout </button>
        </div>
    );
};

export default Dashboard;