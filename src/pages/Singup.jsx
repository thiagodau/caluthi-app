import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getDatabase, ref, set } from "firebase/database";
import "../firebaseConfig";

export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function cadastrar() {
    const database = getDatabase();
    let userId = Math.floor(Math.random() * 99999);

    await set(ref(database, "users/" + userId), {
      id: userId,
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        // Data saved successfully!
        console.log("Cadastrado...");
        alert('Cadastrado com sucesso, agora você pode fazer o login!')
        navigate('/')
      })
      .catch((error) => {
        // The write failed...
        alert("Algo deu errado...");
        console.log("Algo deu errado..." + error);
      });
  }

  return (
    <>
      <h1>Cadastro</h1>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="button" onClick={cadastrar}>
        Sign Up
      </button>

      <br />

      <p className="login-link">
        Já tem um conta? <Link to={"/"}>Acessar agora.</Link>
      </p>
    </>
  );
}
