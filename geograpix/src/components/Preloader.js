import React, { useEffect } from 'react';
import axios from 'axios';
import { isFlowPredicate } from '@babel/types';

const Preloader = props => {

    useEffect( () => {
        let vars = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        localStorage.setItem('token', vars.token);
        localStorage.setItem('username', vars.username);
        localStorage.setItem('id', vars.userid);
        localStorage.setItem('inDb', vars.inDatabase)
        if(vars.inDatabase === 'true') {
            props.history.push(`/dashboard/${vars.username}`)
        } else {
            props.history.push('/register/2')
        }
    }, []);

    return(
        <div>
            In Betweennn
        </div>
    )
}

export default Preloader;
