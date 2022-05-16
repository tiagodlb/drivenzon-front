import React from "react";
import styled from "styled-components";

export default function Template() {
  return (
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
      <Footer className="rows center">All right reserved</Footer>
    </Grid>
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

  /* Lembrete pra separar isso aqui em syle components */

  .rows {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.8rem;
    padding: 1rem 0;
  }

  h2 {
    font-size: 1.6rem;
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: #746267;
  }

  Header a {
    color: #fffdfd;
    padding: 1rem;
  }

  a.brand {
    color: #fffdfd;
    font-size: 3rem;
    font-weight: bold;
  }

  .rows.center {
    justify-content: center;
  }

  img {
    border-radius: 0.5rem;
  }

  img.medium {
    max-width: 29rem;
    width: 100%;
  }

  .card {
    border: 0.1rem #c0c0c0 solid;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    margin: 1rem;
  }

  .card-body {
    padding: 1rem;
  }

  .card-body > * {
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 2rem;
  }

  .rating span {
    color: #f0c040;
    margin: 0.1rem;
  }

  .rating span:last-child {
    color: #404040;
  }
`;

const Header = styled.header`
  grid-area: Header;
  background-color: #eb3c85;
`;

const Footer = styled.footer`
  grid-area: Footer;
  background-color: #eb3c85;
  color: #fffdfd;
`;
