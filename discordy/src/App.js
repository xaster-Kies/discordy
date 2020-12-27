import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { selectUser} from './features/userSlice';

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
      <h2>You need to Login</h2>
    )}
      
    </div>
  );
}

export default App;
