import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import AccountLink from './Links/AccountLink';

function App() {
  const debug = true;

  const [user, setUser] = useState({
          email: '',
          password: '',
      });

  return (
    <>
      <div>
        <BrowserRouter>
            <AccountLink link="/register" user={user} setUser={setUser}>Register</AccountLink>
            <AccountLink link="/login" user={user} setUser={setUser}>Login</AccountLink>
          <Routes>
            <Route path="/" element={<div style={{fontSize: '25px'}}>Main page</div>}/>
            <Route path="/login" element={<Login debug={debug} user={user} setUser={setUser}/>}/>
            <Route path="/register" element={<Register debug={debug} user={user} setUser={setUser}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
