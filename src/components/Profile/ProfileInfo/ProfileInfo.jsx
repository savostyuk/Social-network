import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) =>{

    if (!props.profile){
        return <Preloader/>
    }

    return(
        <div>
{/*            <div>
                <img src='https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg'/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={"Hello my friends"}/>
            </div>
        </div>
    )
}
export default ProfileInfo;