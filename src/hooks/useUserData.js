import axios from 'axios';
import { useEffect, useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  useEffect(() => {
    const fetchUserData = async (auth) => {
      const {data: userData} = await api.get('/user', {
        headers: { 'x-extension-jwt': auth.token }
      });
      setUserData(userData);
    }

    window.Twitch.ext.onAuthorized((auth) => {
      if (window.Twitch.ext.viewer.isLinked) {
        fetchUserData(auth);
        setAuthToken(auth.token);
      }
    });

    window.Twitch.ext.actions.requestIdShare();
  }, []);

  return { userData, authToken };
}

export default useUserData;