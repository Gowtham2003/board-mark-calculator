import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Biology from './Biology';
import CS from './CS';
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
                    <CS />
                </Route>
                <Route exact path="/ps">
                    <PureScience />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>

            <div className="mt-10 md:mt-1 p-3 text-center">
                Created by
                <a
                    className="ml-1 underline hover:text-primary-gray-20"
                    href="https://www.github.com/Gowtham2003"
                >
                    Gowtham
                </a>
            </div>
        </Router>
    );
};

export default App;
