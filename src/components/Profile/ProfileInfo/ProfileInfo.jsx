import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) =>{

    if (!profile){
        return <Preloader/>
    }

    return(
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large}/>
                <div>{profile.aboutMe}</div>
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;