import React from 'react';
import {createField, Input, Textarea} from "../../common/FormControls/FormsControl";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div>
            <strong>Full name</strong> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <strong>Looking for a job:</strong>
            {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <strong>My professional skills</strong> {profile.lookingForAJobDescription}
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}

        </div>


        <div>
            <strong>About me:</strong> {profile.aboutMe}
            {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {
/*
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
*/
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
