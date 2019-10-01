import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

import PlotIcon from './PlotIcon';
import {getPictureObject, refreshPictureObject} from '../store/actions';
import Logo from '../assets/logo-geograpics.svg'
// import Search from '../assets/Path.png'
import PopupModal from './marker/popup';
import Profile from './Profile/Profile';

export const Map = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 20,
        longitude: 0,
        zoom: 2,
        width: '100vw',
        height: '100vh',
    })
    
    const [selectedPark, setSelectedPark] = useState(null);
    const [ShowProfile, setShowProfile] = useState(false);

    useEffect( () => {
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

    const toggleProfile = (e) => {
      e.preventDefault();
      setShowProfile(!ShowProfile)
    }

    const logout = () => {
        localStorage.clear();
		    props.history.push('/') 
    }

    const refreshPics = () => {
      props.refreshPictureObject();
    };

    if(!props.pictureInfo) return null 
    return (
        <div className="App">
        <button onClick={refreshPics} className="refresh-pics">
          {props.isGetting ?
            <Loader type="Bars" color="#somecolor" height={20} width={20} />
            :
            "reFresh Pictures"
          }
        </button>
        <header className="App-header">
        <ReactMapGL
            style={{position: "relative"}}
            {...viewport} 
            mapboxApiAccessToken="pk.eyJ1IjoibGFtYmRhbGFibWFwIiwiYSI6ImNrMGN4cGhpaDAwbXkzaHF2OWV2ODVqeXUifQ.TMRmQN2yzxAX43K5g7Y2TA"
            mapStyle= "mapbox://styles/lambdalabmap/ck0ogodu804y91cqrfpsac1pz"
            onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
            <NavigationControl showCompass showZoom captureScroll captureDrag />
          <div className="top-toolbar">
            <div className="top-toolbar-static">
              <img className="top-toolbar-logo" src={Logo} alt="Geograpics Logo" />
              <div className="top-toolbar-profile-thumbnail">
                {/* <input className="top-toolbar-searchbox" placeholder="Search" type="text" /> //*/}
                <button className="top-toolbar-profile-button" onClick={toggleProfile}>
                  <img className="top-toolbar-thumbnail-photo" src= {props.pictureInfo.profile_pic} alt={props.pictureInfo.username}/>
                </button>
                {ShowProfile ? (  
                  <Profile {...props} logout={logout} />
                ): null}
              </div>
            </div>
          </div>
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
            <PopupModal
            {...props}
            selectedPark={selectedPark}
            latitude={parseFloat(selectedPark.latitude)} 
            longitude={parseFloat(selectedPark.longitude)}
            onClose={closePopup}
            />
          ) : null}

        </ReactMapGL>
        {/* <h1 className="title">This is map</h1> */}
      </header>
    </div>
  );
};

const mapStateToProps = state => {
    return{
        pictureInfo: state.maps.pictureInfo,
        isGetting: state.maps.isGetting
    }
}

export default connect(mapStateToProps, {getPictureObject, refreshPictureObject})(Map);
