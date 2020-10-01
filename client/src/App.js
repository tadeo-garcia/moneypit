import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages'
import {setUser} from './store/auth'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session/current");
      if (res.ok) {
        res.data = await res.json(); // current user info - obj with key of user
        dispatch(setUser(res.data.user));
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);

  if(loading) return null;
    
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
