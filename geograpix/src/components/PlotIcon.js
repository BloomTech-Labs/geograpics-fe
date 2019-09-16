import React from "react";
import { Marker } from "react-map-gl";

import Icon from '../assets/airlyticsicon.png'


const PlotIcon = (props) => {
    if(!props.latitude) return <p>Loading...</p> 
        return (
            <div>
                <Marker
                    latitude={props.latitude}
                    longitude={props.longitude}
                >
                    <button>
                    <img src={Icon} style={{ width: "15px", height: "auto" }} alt={props.caption} />
                    </button>
                </Marker>
            </div>
        )
}

export default PlotIcon;
