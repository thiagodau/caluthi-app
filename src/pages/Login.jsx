import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const acessar = () => {
    let user = { email, password }
		console.log(user)
  };

  return (
    <>
      <h1>Caluthi</h1>
      <label htmlFor="email">Informe seu e-mail:</label>
      <br />
      <input
        type="text"
        name="email"
        id="iptEmail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Informe sua senha:</label>
      <br />
      <input
        type="password"
        name="password"
        id="iptPassword"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button id="btnAcessar" onClick={acessar}>
        Acessar
      </button>
    </>
  );
}
