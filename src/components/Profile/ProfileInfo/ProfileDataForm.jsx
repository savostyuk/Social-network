import React from 'react';
import {createField, Input, Textarea} from "../../common/FormControls/FormsControl";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from '../../common/FormControls/FormsControl.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Сохранить</button>
        </div>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <strong>ФИО: </strong> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <strong>Ищу работу: </strong>{createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <strong>Мои профессиональные навыки: </strong>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}

        </div>


        <div>
            <strong>Обо мне: </strong>
            {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
            <strong>Контакты: </strong> {Object.keys(profile.contacts).map(key => {

            return <div key={key} className={s.contact}>
                <strong>{key}: {createField(key, "contacts."+key, [], Input)}</strong>
            </div>

        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
