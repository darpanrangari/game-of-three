import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainGame from './components/MainGame'
import GameMode from './components/GameMode'
import Home from './components/Home'
import {Socket} from './contexts/Socket';
import {Game} from './contexts/Game';

export default function Journey() {
    return (
        <Router>
            <Socket>
                <Game>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/gamemode" component={GameMode}/>
                        <Route path="/maingame" component={MainGame}/>
                    </Switch>
                </Game>
            </Socket>
        </Router>
    );
}