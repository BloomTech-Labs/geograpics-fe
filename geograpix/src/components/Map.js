import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';

import PlotIcon from './PlotIcon';
import {getPictureObject} from '../store/actions';

const Map = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 37.77872018361018,
        longitude: -122.3962783813477,
        zoom: 10,
        width: '90vw',
        height: '90vh',
    })
    

    useEffect(() => {
        props.getPictureObject();
    },[])

    if(!props.pictureInfo) return <p>Loading...</p> 
    return (
        <div className="App">
        <header className="App-header">
        <ReactMapGL 
            {...viewport} 
            mapboxApiAccessToken="pk.eyJ1IjoibGFtYmRhbGFibWFwIiwiYSI6ImNrMGN4cGhpaDAwbXkzaHF2OWV2ODVqeXUifQ.TMRmQN2yzxAX43K5g7Y2TA"
            mapStyle= "mapbox://styles/lambdalabmap/ck0ogodu804y91cqrfpsac1pz"
            onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {props.pictureInfo.map((marker, index) => (
            <PlotIcon
              key={index}
              latitude={parseFloat(marker.latitude)}
              longitude={parseFloat(marker.longitude)}
              caption={marker.caption}
            />
          ))}
        </ReactMapGL>
        {/* <h1 className="title">This is map</h1> */}
      </header>
    </div>
  );
};

const mapStateToProps = state => {
    return{
        pictureInfo: state.maps.pictureInfo
    }
}

export default connect(mapStateToProps, {getPictureObject})(Map);
