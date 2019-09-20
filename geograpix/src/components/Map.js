import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { connect } from "react-redux";

import PlotIcon from "./PlotIcon";

export const Map = props => {
  const [viewport, setViewport] = useState({
    latitude: 32.173114,
    longitude: -95.773993,
    zoom: 10,
    width: "90vw",
    height: "90vh"
  });

  // useEffect(() => {
  //     props.pictureInfo
  // },[])

  if (!props.pictureInfo) return <p>Loading...</p>;
  return (
    <div className="map">
        <h1 className="title">This is map</h1>
      <header className="map-header">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibGFtYmRhbGFibWFwIiwiYSI6ImNrMGN4cGhpaDAwbXkzaHF2OWV2ODVqeXUifQ.TMRmQN2yzxAX43K5g7Y2TA"
          mapStyle="mapbox://styles/lambdalabmap/ck0cxri810ael1dpsew5mayn5"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {props.pictureInfo.map((marker, index) => (
            <PlotIcon
              key={index}
              latitude={marker.latitude}
              longitude={marker.longitude}
              caption={marker.caption}
            />
          ))}
        </ReactMapGL>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pictureInfo: state.pictureInfo
  };
};

export default connect(
  mapStateToProps,
  {}
)(Map);
