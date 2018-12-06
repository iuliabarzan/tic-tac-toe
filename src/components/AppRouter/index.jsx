import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
} from 'react-router-dom';
import Home from '../Home';
import Players from '../Players';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/players">Players</NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/players" component={Players} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
