import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import './App.global.css';
import Library from './components/Library';
import Songs from './components/Songs';
import Player from './components/Player';

const Hello = () => {



return (
    <div className='flex flex-col bg-gray-800 h-screen justify-between'>
        <main>
            <Library />
        </main>
        <footer className="h-28 bg-blue-900 p-2">
            <Player></Player>
        </footer>
    </div>
);
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
