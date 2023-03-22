import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import authReducer, { login, logout } from "./authSlice";

export { Login, Register, ProtectedRoute, authReducer, login, logout };