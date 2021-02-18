const initialState = {
    game: {},
    user: {
        id: null,
        userName: null
    }
}
const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NEW_GAME':
            return {
                ...state,
                game: action.data
            }
        case 'SET_USER':
            return {
                ...state,
                user:{
                    id: makeid(5),
                    userName: action.data
                }
            }
        default:
            return state
    }
}


export default reducer