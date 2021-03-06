import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) =>{
         saveProfile(formData)
             .then (()=>{
                 setEditMode(false);
             })
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode ?
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <div>
            <strong>ФИО: </strong> {profile.fullName}
        </div>
        <div>
            <strong>Ищу работу: </strong> {profile.lookingForAJob ? "да" : "нет"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <strong>Мои профессиональные навыки: </strong> {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <strong>Обо мне: </strong> {profile.aboutMe}
        </div>
        <div>
            <strong>Контакты: </strong> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>

        {isOwner && <div><button className={styles.buttonProfile} onClick={goToEditMode}>Редактировать</button></div>}

    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}>
        <strong>{contactTitle}</strong>: {contactValue}
    </div>
}

export default ProfileInfo;
