import React from 'react'
import Layout from '../Layout/Layout'
import {initNewGame} from '../../actions/action'
import {connect} from 'react-redux'
import {useSocket} from '../../contexts/Socket';
import {useHistory} from 'react-router-dom';


const GameMode = (props) => {
    const history = useHistory();
    const socket = useSocket();

    const setGame = (soloPlayer) => {
        const gameParam = {
            user:{
                id:props.user.id
            },
            isSingleUser: soloPlayer
        }

        props.dispatch(initNewGame(socket,gameParam))

        history.push('maingame')
    }

    return (
        <Layout>
           <div>
               <div>
                   <button onClick={() => setGame(true)}>Solo Player</button>
               </div>
               <div>
                   <button onClick={() => setGame(false)}>Multi Player</button>
               </div>
           </div>
        </Layout>
    );


}

const mapStateToProps = (state = {}) => {

    return {
        game: state.game,
        user: state.user
    };
};
export default connect(mapStateToProps)(GameMode);
