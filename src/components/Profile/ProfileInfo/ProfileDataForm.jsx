import React from 'react';
import {createField, Input, Textarea} from "../../common/FormControls/FormsControl";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from '../../common/FormControls/FormsControl.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <strong>Full name</strong> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <strong>Looking for a job:</strong>
            {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <strong>My professional skills</strong>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}

        </div>


        <div>
            <strong>About me:</strong>
            {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {

            return <div key={key} className={s.contact}>
                <strong>{key}: {createField(key, "contacts."+key, [], Input)}</strong>
            </div>

        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
