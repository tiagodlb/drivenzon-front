import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      <Grid>
        <Header className="rows">
          <div>
            <a className="brand" href="/">
              Drivazon
            </a>
          </div>
          <div>
            <a href="/CartPage">Cart</a>
            <a href="/SignInPage">Sign In</a>
          </div>
        </Header>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Main className="rows center">
            <Div>
              <form className="form">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div>
                  <Button type="submit" onClick={handleSubmit}>
                    Login
                  </Button>
                </div>
              </form>
              <Link to={"/signup"}>New customer? Create an account here!</Link>
            </Div>
          </Main>
        )}
        <Footer className="rows center">All right reserved</Footer>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 5rem;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: Header;
  background-color: #eb3c85;
`;

const Main = styled.main`
  grid-area: Main;
  padding: 1rem;
`;

const Footer = styled.footer`
  grid-area: Footer;
  background-color: #eb3c85;
  color: #fffdfd;
`;

const Button = styled.button`

`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
