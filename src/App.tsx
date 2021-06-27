import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Biology from './Biology';
import PureScience from './PureScience';
import Home from './Home';
import Nav from './Nav';
import NotFound from './NotFound';
const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/bio">
                    <Biology />
                </Route>
                <Route exact path="/cs">
                    <Biology />
                </Route>
                <Route exact path="/ps">
                    <PureScience />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
