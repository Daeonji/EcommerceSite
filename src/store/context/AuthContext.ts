import { createContext, useContext } from 'react';
export type AuthState = {
  username: string;
  setUsername: (name: string) => void;
  authToken: string;
  setAuthToken: (token: string) => void;
};
export const AuthContext = createContext<AuthState>({
  username: '',
  authToken: '',
  setAuthToken: (t) => {
    return;
  },
  setUsername: (u) => {
    return;
  },
});
export const useAuthContext = () => useContext(AuthContext);
