import React, {useContext, useEffect, useState, createContext} from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext();

export const Socket = ({children}) => {
    const [socket, setSocket] = useState();

    useEffect(() => {
        const socketClient = socketIOClient('http://localhost:5000');

        setSocket(socketClient);

        return () => socketClient.close();

    }, []);

    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    );
}
export const useSocket = () => useContext(SocketContext);
