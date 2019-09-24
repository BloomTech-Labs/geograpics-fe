import React from "react";
import { Marker } from "react-map-gl";

import Icon from '../assets/marker.svg';


const PlotIcon = (props) => {
  if(!props.latitude) return <p>Loading...</p>;

  return (
    <div className="marker">
      <Marker
        latitude={props.latitude}
        longitude={props.longitude}
      >
        <button className="btn-marker" onClick={props.clickMarker}>
          {/* <img src='' alt="test" class="thumbnail" /> */}
          <img src={Icon} style={{ width: "15px", height: "auto" }} alt={props.caption} />
        </button>
      </Marker>
    </div>
  );
};

export default PlotIcon;
