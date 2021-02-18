
export const setGame = (data) => ({
    type: "SET_NEW_GAME",
    data
})

// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

/***************************************************************************************** */
/* Async Action items using - Sockets													   */
/***************************************************************************************** */
export const initNewGame = (socket,gameParam) => {
    return (dispatch) => {
        socket.emit('newgame', gameParam)
    }
}

export const playerAttempt = (socket, value, game, user) => {
    return (dispatch) => {
        let postData = {
            gameId: game.id,
            number: value,
            user: {
                id: user.id
            }
        }
        console.log(postData);
        socket.emit('turn', postData)
    }
}
