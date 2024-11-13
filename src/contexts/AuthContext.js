import { createContext, useEffect, useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    window.Twitch.ext.onAuthorized((auth) => {
      if (window.Twitch.ext.viewer.isLinked) {
        setToken(auth.token);
      }
    });
    
    window.Twitch.ext.actions.requestIdShare();
  }, [setToken]);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };