import React, { useState, useEffect } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import { connect } from 'react-redux';

import PlotIcon from './PlotIcon';
import {getPictureObject} from '../store/actions';

export const Map = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 37.09872018361018,
        longitude: -122.3962783813477,
        zoom: 10,
        width: '100vw',
        height: '100vh',
    })
    
    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        props.getPictureObject();
    },[])

    useEffect(() => {
      const listener = e => {
        if(e.key === "Escape"){
          setSelectedPark(null)
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener)
      }
    }, [])

    const closePopup = () => {
      setSelectedPark(null)
    }

    if(!props.pictureInfo) {
      return <p>Loading...</p>
    }
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
          {(props.pictureInfo.pictures !== undefined) && props.pictureInfo.pictures.map((marker, index) => (
            
            <PlotIcon
              key={index}
              latitude={parseFloat(marker.latitude)}
              longitude={parseFloat(marker.longitude)}
              caption={marker.caption}
              clickMarker={(e) => {
                e.preventDefault();
                setSelectedPark(marker)
              }}
            />
          ))}

          {selectedPark ? (
            <Popup 
              latitude={parseFloat(selectedPark.latitude)} 
              longitude={parseFloat(selectedPark.longitude)}
              onClose={closePopup}
            >
              <div>
                <img className="img-marker" src={selectedPark.thumbnail} alt={selectedPark.caption} />
                <div style={{display: 'flex', alignItems: 'baseline', margin: '5px 0% 0px 0%', paddingLeft: "10px"}}>
                  <h5 style={{ margin: "15px 0px 5px 0px", fontSize: ".8rem"}}>Lanatheartist</h5>
                  <p style={{ margin: "0px", paddingLeft: '10px', fontWeight: "lighter", fontSize: ".8rem"}}>{selectedPark.caption}</p>
                </div>
                <p style={{ fontSize: ".8rem", paddingLeft: "10px", margin: "0px 0px 20px 0px", color: "slategrey"}}>Aug 4, 2019</p>
              </div>
            </Popup>
          ) : null}

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
