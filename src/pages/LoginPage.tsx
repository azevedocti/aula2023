import { Link } from "react-router-dom";
import { Login } from '../components/Login';

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <Login />
      <Link to="/">Voltar para Home</Link>

    </>
  );
}