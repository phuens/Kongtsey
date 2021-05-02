import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Donate from './pages/donate/donate';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Homepage} />
                <Route exact path={'/donate'} component={Donate} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
