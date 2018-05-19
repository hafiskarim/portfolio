import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Project from './project';
import Contact from './contact';
import Landing from './landingpage';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/project" component={Project}/>
    </Switch>
)

export default Main;