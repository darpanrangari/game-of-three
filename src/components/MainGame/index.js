import React from 'react'
import styles from './maingame.module.scss';
import Layout from '../Layout/Layout'
import {playerAttempt} from '../../actions/action'
import {connect} from 'react-redux'
import {useSocket} from '../../contexts/Socket';
import {useGame} from '../../contexts/Game';

const MainGame = (props) => {

    const socket = useSocket();
    const {game} = useGame();

    const onPlayerTurn = (e, value) => {
        e.preventDefault();
        props.dispatch(playerAttempt(socket, value, game, props.user))
    }

    const playerAttempts = () => {
        const {attemps} = game;
        return attemps && attemps.map((attemp, key) => (
            <div className={(attemp.user.id === props.user.id) ? styles.textLeft : styles.textRight}>
                <span>{attemp.oldValue}</span>
                <span>{attemp.number}</span>
                <span>{attemp.text}</span>
                <span>{attemp.newValue}</span>
            </div>
        ))
    }

    const isUserTurn = game && game.turn === props.user.id;

    return (
        <Layout>
            <h1>Hi {props.user.userName}</h1>
            <div>

                {(game.winner !== null && game.winner === props.user.id) && <h1> You Won! </h1>}
                {(game.winner !== null && game.winner !== props.user.id) && <h1> You loose! </h1>}
                <br/>
                <span>{game.startingNumber}</span>
                <div className={styles.chatContainer}>

                    {playerAttempts()}
                </div>

                {isUserTurn && <div>
                    <button onClick={(e) => onPlayerTurn(e, -1)}>-1</button>
                    <button onClick={(e) => onPlayerTurn(e, 0)}>0</button>
                    <button onClick={(e) => onPlayerTurn(e, 1)}>1</button>
                </div>
                }
            </div>
        </Layout>
    );


}

const mapStateToProps = (state = {}) => {

    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(MainGame);
