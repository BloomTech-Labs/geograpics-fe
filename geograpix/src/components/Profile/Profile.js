import React from 'react';

const Profile = props => {
  console.log('PROFILE PROPS',props);

  return(
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
            <button className="btn-signout" onClick={props.logout}>Sign Out</button>
        </div>
      </div>
  );
};

export default Profile;