import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src='https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;