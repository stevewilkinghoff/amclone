import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import FMOH from '../src/components/FMOverheadMain';
import Header from '../src/components/Header';
import RoadmapEntry from '../src/components/RoadmapEntry';
import RoadmapStartMain from '../src/components/RoadmapStartMain';
import CustomerEntry from '../src/components/CustomerEntry';
import FMOverheadItemEntry from '../src/components/FMOverheadItemEntry';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/" component={FMOH} exact={true} />
        <Route path="/fmoh" component={FMOH} />
        <Route path="/rmentry" component={RoadmapEntry} />
        <Route path="/rmroadmap" component={RoadmapStartMain} />
        <Route path="/custentry" component={CustomerEntry} />
        <Route path="/fmitementry" component={FMOverheadItemEntry} />
      </Switch>
      </div>
    </BrowserRouter>
  )

  export default AppRouter;
  