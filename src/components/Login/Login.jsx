import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormControls/FormsControl.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.loginInput}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
            </div>
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "Запомнить")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}


            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={styles.buttonLogin}>Войти</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h3 className={styles.loginTitle}>Добро пожаловать</h3>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginTC})(Login);
