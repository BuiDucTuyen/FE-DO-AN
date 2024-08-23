import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import client from "../config";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser({ email: storedUser });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await client.post("http://127.0.0.1:8000/user/login", {
        email,
        password,
      });
      toast.success("Đăng nhập thành công!");
      setUser(response.data.email);
      localStorage.setItem("user", response.data.email);
    } catch (error) {
      toast.error(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập!"
      );
    }
  };

  const logout = async () => {
    try {
      await client.post("http://127.0.0.1:8000/user/logout");
      toast.success("Đăng xuất thành công!");
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
