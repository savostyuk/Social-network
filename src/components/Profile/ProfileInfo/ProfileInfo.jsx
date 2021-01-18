import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) =>{

    if (!profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return(
        <div>
            <div className={styles.descriptionBlock}>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <div>{profile.aboutMe}</div>
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;
