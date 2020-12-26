import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Build a Discord Clone</h1>

      {/* Sidebar */}
      <Sidebar/>
    </div>
  );
}

export default App;
