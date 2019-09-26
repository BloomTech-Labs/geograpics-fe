import React from 'react';

import Map from './Map';

const Dashboard = (props) => {

    return (
        <div>
            <Map history={props.history} />
        </div>
    );
};

export default Dashboard;