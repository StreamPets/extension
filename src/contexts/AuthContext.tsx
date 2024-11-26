import React from "react";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
	token: string | null;
	setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({
	token: null,
	setToken: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		window.Twitch.ext.onAuthorized((auth) => {
			if (window.Twitch.ext.viewer.isLinked) {
				setToken(auth.token);
			}
		});

		window.Twitch.ext.actions.requestIdShare();
	}, []);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
