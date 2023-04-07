import { createContext, useContext } from 'react';
export type AuthState = {
  username: string;
  setUsername: (name: string) => void;
  authToken: string;
  setAuthToken: (token: string) => void;
  profilePicture: string;
  setProfilePicture: (url: string) => void;
};
export const AuthContext = createContext<AuthState>({
  username: '',
  authToken: '',
  profilePicture: '',
  setAuthToken: (t) => {
    return;
  },
  setUsername: (u) => {
    return;
  },
  setProfilePicture: (u) => {
    return;
  },
});
export const useAuthContext = () => useContext(AuthContext);
