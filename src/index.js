import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import FMOH from '../src/components/FMOverheadMain';
import Roadmap from '../src/components/RoadmapMain';
import RoadmapEntry from '../src/components/RoadmapEntry';
import RoadmapMain from '../src/components/RoadmapMain';
import RoadmapStartMain from '../src/components/RoadmapStartMain';
import RoadmapStart from '../src/components/RoadmapStart';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoadmapStartMain />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
