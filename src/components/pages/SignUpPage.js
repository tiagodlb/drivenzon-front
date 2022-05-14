import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/sign-up", {
                name,email,password, confirmPassword
            })
            alert("Cadastro feito com sucesso")
            navigator("/signin")
        } catch (error) {
         alert("Infelizmente aconteceu um erro! Tente novamente!")
         console.log(error)   
        }
    }

  return (
    <>
      <h1>Drivazon</h1>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
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
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirme a senha"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Cadastrar</button>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </>
  );
}
