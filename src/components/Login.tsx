import { useState} from 'react';

export function Login() {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();

  
  return (
    <>
    <form>
      <div>
      <label> Usuário: </label>
      <input />
      </div>
      <div>
        <label>Senha: </label>
        <input type="password"/>
        </div>
    </form>
    </>
  )
}