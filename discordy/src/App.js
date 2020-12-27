import React from 'react';
import { Counter } from './features/Counter';
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
