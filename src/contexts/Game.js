import React, {useEffect, useReducer, useContext} from 'react';
import {useSocket} from './Socket';

const GameContext = React.createContext();
export const Game = ({children}) => {
    const [state, setState] = useReducer(
        (currState, newState) => ({...currState, ...newState}),
        {
            game: {id: null},
        },
    );
    const socket = useSocket();
    const {game} = state;
    useEffect(() => {
        if (socket == null) return;
        socket.on('game', game => {
            setState({game});
        });
        return () => {
            socket.off('game');
        };
    }, [socket, game]);
    return <GameContext.Provider value={{game:state.game}}>{children}</GameContext.Provider>;
}

export const useGame = () => {
    return useContext(GameContext);
}
