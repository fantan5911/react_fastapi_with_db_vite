import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { useState } from 'react';

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
          <Routes>
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
