import { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [User, SetUser] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const userfromlocal = JSON.parse(localStorage.getItem("auth"));
    if (userfromlocal) {
      SetUser({
        ...User,
        user: userfromlocal.user,
        token: userfromlocal.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[User, SetUser]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
