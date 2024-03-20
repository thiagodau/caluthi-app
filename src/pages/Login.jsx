import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../firebaseConfig";

import { getDatabase, ref, get, child } from "firebase/database";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const acessar = () => {
    if(email && password) {
      let user = { email, password };
      validacaoUsuario(user);
    }else {
      alert('Campos vazios.')
    }
  };

  async function validacaoUsuario({ email, password }) {
    console.log("buscando usuario...");

    const database = ref(getDatabase());

    await get(child(database, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let usuarios = snapshot.val();
          let arr = Object.values(usuarios);
          let usuarioEncontrado = arr.filter(
            (user) => user.email == email && user.password == password
          );

          if (usuarioEncontrado.length == 1) {
            localStorage.setItem("@user-id", usuarioEncontrado[0].id);
            localStorage.setItem("@user-email", usuarioEncontrado[0].email);
            navigate("/dashboard");
          } else {
            alert(
              `Usuário não encontrato, verifique e-mail e senha ou cadastre-se.`
            );
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("erro aqui: " + error);
      });
  }

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

      <br />
      <br />

      <p style={{fontSize:'12px'}}><Link to="/singup">Cadastre-se aqui.</Link></p>
    </>
  );
}
