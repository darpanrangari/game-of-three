import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import styles from './styles.module.scss'
import Layout from "../Layout/Layout";

console.log(styles);
const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const onChangeHandler = event => {
        event.preventDefault();
        dispatch({type: "SET_USER", data: event.target.value});
    };

    const onClickHandler = event => {
        event.preventDefault();
        history.push('/gamemode');
        return false;
    };

    return (

        <Layout>
            <div className={styles.login}>
                <label htmlFor="username">Please enter your Name:</label>
                <input type='text' name='username' placeholder='Ex: John Doe' required onChange={onChangeHandler}/>

                <button className={styles.button} onClick={onClickHandler}>
                    Continue
                </button>
            </div>
        </Layout>

    );
};

export default Login;
