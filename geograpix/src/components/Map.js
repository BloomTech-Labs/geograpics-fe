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
        latitude: 33.0730569,
        longitude: -96.774234,
        zoom: 10,
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
          <div style={{zIndex: "50", width: "100%", position: "absolute"}}>
            <div style={{position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between"}}>
              <img style={{width: "auto", height: "44px", margin: "25px"}} src={Logo} alt="Geograpics Logo" />
              <div style={{display:"flex", alignItems: "center"}}>  
                <input style={{marginRight: "-10px", boxShadow:  "1px 3px 2px 0px rgba(0,0,0,0.3)", paddingLeft: "10px", border: "none", height: "20px", borderRadius: "20px"}} placeholder="Search" type="text" />
                <button style={{margin: "0px", border: "none", backgroundColor: "transparent"}} onClick={toggleProfile}>
                  <img 
                    style= {{
                      cursor: "pointer", 
                      width: "47px", 
                      margin: "33px 33px 25px 25px", 
                      borderRadius: "50%"
                    }} 
                    src= {props.pictureInfo.profile_pic} 
                    alt= {props.pictureInfo.username} 
                  />
                </button>
              </div>
            </div>
          </div>
          {ShowProfile ? (  
            <div style={{zIndex: "50", width: "100%", position: "absolute", top: "88px", display: "flex", justifyContent: "flex-end"}}>
              <div style={{border: "1px solid slategrey", borderRadius: "10px", width: "320px", backgroundColor: "white", marginRight: "40px", boxShadow:  "2px 3px 2px 2px rgba(0,0,0,0.3)"}}>
                <div style={{borderBottom: "1px solid slategrey", display: "flex", alignItems: "center", justifyContent: "space-around", paddingRight: "2%"}}>
                  <div style={{width: "40%"}}>
                    <img 
                      style= {{
                        cursor: "pointer", 
                        width: "100px", 
                        height: "100px",
                        margin: "33px 33px 25px 25px", 
                        borderRadius: "50%"
                      }} 
                      src= {props.pictureInfo.profile_pic} 
                      alt= {props.pictureInfo.username} 
                    />
                  </div>
                  <div style={{width: "40%", display: "flex", flexDirection: "column"}}>
                    <h5 style={{fontSize: "1rem",margin: "0px"}}>{props.pictureInfo.full_name}</h5>
                    <p style={{margin: "3px 0%", fontSize: ".7rem"}}>{props.pictureInfo.email}</p>
                    <p style={{margin: "3px 0%", fontWeight: "bold", fontSize: ".7rem"}}>Edit Profile</p>
                    <p style={{margin: "3px 0%", fontWeight: "bold", fontSize: ".7rem"}}>Privacy Settings</p>
                  </div>
                </div>
                <div style={{borderBottom: "1px solid slategrey", padding: "20px 0%", display: "flex", justifyContent: "space-evenly"}}>
                  <div>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>{props.pictureInfo.pictures.length}</p>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>Posts</p>
                  </div>
                  <div>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>50</p>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>Followers</p>
                  </div>
                  <div>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>{props.pictureInfo.pictures.length}</p>
                    <p style={{fontSize: ".95rem", fontWeight: "bold", margin: "0px"}}>Posts</p>
                  </div>
                </div>
                <div style={{padding: "20px 0%", display: "flex", justifyContent: "space-around"}}>
                    <button style={{fontSize: ".7rem"}} className="btn-instagramaccount">Instagram Account</button>
                    <button style={{fontSize: ".7rem"}} onClick={logout} className="btn-signout">Sign Out</button>
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
