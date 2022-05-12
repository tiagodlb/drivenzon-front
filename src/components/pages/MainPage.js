import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MainPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/sign-in", {
        email,
        password,
      });
      alert("Bem-vindo!");
      navigator("/home");
    } catch (error) {
      alert("Infelizmente aconteceu um erro! Tente novamente!");
      console.log(error);
    }
  }
  return (
    <>
      <h1>Drivazon</h1>
      <form>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </>
  );
}
