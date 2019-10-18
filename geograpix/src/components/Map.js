import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';

import PlotIcon from './PlotIcon';


import StopCalendar from './StopCalendar'
import StartCalendar from './StartCalendar'
import {getPictureObject, refreshPictureObject} from '../store/actions';
// import Search from '../assets/Path.png'
import PopupModal from './marker/popup';
import ProfileBar from './ProfileBar';


export const Map = (props) => {
  // console.log('MAP PROPTYPES', props);

    const [viewport, setViewport] = useState({
        latitude: 20,
        longitude: 0,
        zoom: 2,
        width: '100vw',
        height: '100vh',
    })
    
    const [selectedPark, setSelectedPark] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Calender Data
    const [startDate, setStartDate] = useState(null);
    const [stopDate, setStopDate] = useState(null);

    const [unixStart, unixSetStart] = useState()
    const [unixStop, unixSetStop] = useState()

    const [filteredArray, setFilteredArray] = useState([])

    // console.log("Unix Start", unixStart)
    // console.log("Unix Stop", unixStop)

    useEffect(() => {
      startDate &&
      unixSetStart(startDate.getTime()/1000)
    },[startDate])

    useEffect(() => {
      stopDate &&
      unixSetStop((stopDate.getTime() + 68399000) /1000 )
    },[stopDate])

    useEffect( () => {
        props.getPictureObject();
    },[])

    // useEffect( () => {
    //   console.log('pictures!')
    //   if(props.pictureInfo.pictures !== undefined) {
    //     (unixStart && !unixStop) ?
    //     setFilteredArray(props.pictureInfo.pictures.filter( picture => parseInt(picture.created_time) > unixStart ))
    //   : (!unixStart && unixStop) ?
    //     setFilteredArray(props.pictureInfo.pictures.filter( picture => parseInt(picture.created_time) < unixStop ))
    //   :
    //     setFilteredArray(props.pictureInfo.pictures.filter( picture => unixStop > parseInt(picture.created_time) > unixStart ))
    //   }
    // }, [stopDate])

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

    const toggleDatePicker = (e) => {
      e.preventDefault();
      setShowDatePicker(!showDatePicker)
    }

    const closeDatePicker = (e) =>{
      e.preventDefault()
      setShowDatePicker(false)
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
          <div style={{  Zindex: '50', position: 'absolute', display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
            <button 
              onClick={toggleDatePicker} 
              style={{color: 'white', cursor: 'pointer', border: 'none', marginTop: '120px', marginRight: '37px', Zindex: '50', backgroundColor: 'black', height: '50px', width: '50px', borderRadius: '50%'}}
            >Date</button>
          </div>
          {showDatePicker ? (
              <div style={{paddingTop:'140px', marginLeft: '85%', position: 'absolute', backgroundColor: 'rgba(255,255,255,0.85)', height: '100vh', width: '300px', zIndex: '1000'}}>
                <button style={{border: 'none', backgroundColor: 'black', color: 'white', marginBottom: '40px', padding: '10px 30px', borderRadius: '10px'}} onClick={closeDatePicker}>Back to Map</button>
                <StartCalendar startDate={startDate} setStartDate={setStartDate} />
                <StopCalendar stopDate={stopDate} setStopDate={setStopDate} />
              </div>
          ): null}
          <NavigationControl showCompass showZoom captureScroll captureDrag />
          <ProfileBar {...props} />
          
          {/* { (!unixStart && !unixStop) && props.pictureInfo.pictures !== undefined && setFilteredArray(props.pictureInfo.pictures) }
           { props.pictureInfo.pictures !== undefined &&
            filteredArray.map((marker, index) => 
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
            )  */}
          

          {(props.pictureInfo.pictures !== undefined) && props.pictureInfo.pictures.map((marker, index) => {

            if(!unixStart && !unixStop){
            // console.log(index, "from Insta Time", marker.created_time)

              return(
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
              )
            } else if( unixStart && !unixStop ){
              if(parseInt(marker.created_time) > unixStart) {
                return(
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
                )
              }
            } else if ( !unixStart && unixStop ) {
              if(parseInt(marker.created_time) < unixStop) {
                return(
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
                )
              }
            } else if(parseInt(marker.created_time) > unixStart && parseInt(marker.created_time) < unixStop) {
              // console.log("from Insta Time", marker.created_time)
              return(
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
              )
            }
          })}
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

Map.propTypes = {
  pictureInfo: PropTypes.shape({
    pictures: PropTypes.arrayOf(
      PropTypes.shape({
        longitude: PropTypes.number,
        latitude: PropTypes.number
      })
    )
  })
};

export default connect(mapStateToProps, {getPictureObject, refreshPictureObject})(Map);
