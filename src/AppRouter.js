import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import FMOH from '../src/components/FMOverheadMain';
import FMOH2 from '../src/components/FMOverheadMain2';
import Header from '../src/components/Header';
import RoadmapEntry from '../src/components/RoadmapEntry';
import RoadmapStartMain from '../src/components/RoadmapStartMain';
import RoadmapStartMainTest from '../src/components/RoadmapStartMainTest';
import CustomerEntry from '../src/components/CustomerEntry';
import FMOverheadItemEntry from '../src/components/FMOverheadItemEntry';
import FMOHItemEntry from '../src/components/FMOHItemEntry';
import RoadmapEntryLive from '../src/components/RoadmapEntryLive';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        <Route path="/" component={FMOH} exact={true} />
        <Route path="/fmoh" component={FMOH} />
        <Route path="/fmoh2" component={FMOH2} />
        <Route path="/rmroadmap" component={RoadmapStartMain} />
        <Route path="/custentry" component={CustomerEntry} />
        <Route path="/fmohitementry" component={FMOHItemEntry} />
        <Route path="/rmentrylive" component={RoadmapEntryLive}/>
        <Route path="/rmmaintest" component={RoadmapStartMainTest} />
      </Switch>
      </div>
    </BrowserRouter>
  )

  export default AppRouter;
  