import React, { useState, useEffect } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import { connect } from 'react-redux';

import PlotIcon from './PlotIcon';
import {getPictureObject} from '../store/actions';
import Logo from '../assets/logo-geograpics.svg'
import Search from '../assets/Path.png'

export const Map = (props) => {

    const username = localStorage.getItem('username') 

    const [viewport, setViewport] = useState({
        latitude: 20,
        longitude: 0,
        zoom: 2,
        width: '100vw',
        height: '100vh',
    })
    
    const [selectedPark, setSelectedPark] = useState(null);
    const [ShowProfile, setShowProfile] = useState(false);

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

    const toggleProfile = (e) => {
      e.preventDefault();
      setShowProfile(!ShowProfile)
    }

    const logout = () => {
        localStorage.clear();
		    props.history.push('/') 
    }

    console.log(props.pictureInfo.pictures)

    if(!props.pictureInfo.pictures) return <p>Loading...</p> 
    return (
        <div className="App">
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
          <div className="top-toolbar">
            <div className="top-toolbar-static">
              <img className="top-toolbar-logo" src={Logo} alt="Geograpics Logo" />
              <div className="top-toolbar-profile-thumbnail">  
                <input className="top-toolbar-searchbox" placeholder="Search" type="text" />
                <button className="top-toolbar-profile-button" onClick={toggleProfile}>
                  <img className="top-toolbar-thumbnail-photo" src= {props.pictureInfo.profile_pic} alt={props.pictureInfo.username}/>
                </button>
              </div>
            </div>
          </div>
          {ShowProfile ? (  
            <div className="profile-tab-bar">
              <div className="profile-tab-box">
                <div className="profile-tab-top-div">
                  <div className="profile-tab-img-div">
                    <img className="profile-tab-prof-pic" src= {props.pictureInfo.profile_pic} alt= {props.pictureInfo.username}/>
                  </div>
                  <div className="top-div-details-div">
                    <h5 className="top-div-details-name">{props.pictureInfo.full_name}</h5>
                    <p className="top-div-details">{props.pictureInfo.email}</p>
                    <p className="top-div-details-bold">Edit Profile</p>
                    <p className="top-div-details-bold">Privacy Settings</p>
                  </div>
                </div>
                <div className="profile-tab-middle-div">
                  <div>
                    <p className="middle-div-details">{props.pictureInfo.pictures.length}</p>
                    <p className="middle-div-details">Posts</p>
                  </div>
                  <div>
                    <p className="middle-div-details">50</p>
                    <p className="middle-div-details">Followers</p>
                  </div>
                  <div>
                    <p className="middle-div-details">{props.pictureInfo.pictures.length}</p>
                    <p className="middle-div-details">Posts</p>
                  </div>
                </div>
                <div className="profile-tab-bottom-div">
                    <button className="btn-instagramaccount">Instagram Account</button>
                    <button className="btn-signout" onClick={logout}>Sign Out</button>
                </div>
              </div>
            </div>
          ): null}
          {props.pictureInfo.pictures.map((marker, index) => (
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
                <img className="img-popup" src={selectedPark.thumbnail} alt={selectedPark.caption} />
                <div className="div-text-popup">
                  <h5 className="title-text-div">Lanatheartist</h5>
                  <p className="caption-text-div">{selectedPark.caption}</p>
                </div>
                <p className="date-text-div">Aug 4, 2019</p>
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
