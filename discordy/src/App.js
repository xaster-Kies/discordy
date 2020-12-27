import React from 'react';
import {useSelector} from "react-redux"
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser} from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
    {user ? (
      <>
      <Sidebar/>
      <Chat/>
      </>
    ): (
      <Login/>
    )}
      
    </div>
  );
}

export default App;
