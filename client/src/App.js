import React, { useState, useEffect }  from 'react';
import { BrowserRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pages from './pages/Pages'
import { setUser } from './store/auth';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      // enter your back end route to get the current user
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
        dispatch(setUser(res.data.user))
      }
      setLoading(false);
    }
    loadUser();
  }, [dispatch]);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;