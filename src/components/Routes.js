import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Leaderboard from './Leaderboard';
import Betting from './Betting';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Market from './Market';


const ReactRouter = () => {
    return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/betting" component={Betting} />
                    <Route path="/market" component={Market} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Fragment>
    
       )
     }
export default ReactRouter;