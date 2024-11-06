import axios from 'axios';
import { useEffect, useState } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  useEffect(() => {
    const fetchUserData = async (auth) => {
      const helixToken = auth.helixToken;

      const { data: { data: user }} = await axios.get('https://api.twitch.tv/helix/users', {
        params: { 'id': auth.userId.replace('U','') },
        headers: {
          'client-id': process.env.REACT_APP_CLIENT_ID,
          'Authorization': `Extension ${helixToken}`,
        },
      });

      const {data: userData} = await api.get('/user', {
        params: { 'username': user[0].login },
        headers: { 'x-extension-jwt': auth.token }
      });

      setUserData(userData);
    }

    window.Twitch.ext.onAuthorized((auth) => {
      if (window.Twitch.ext.viewer.isLinked) {
        fetchUserData(auth);
      }
    });

    window.Twitch.ext.actions.requestIdShare();
  }, []);

  return { userData };
}

export default useUserData;