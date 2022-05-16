import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import LoadingBox from "../LoadingBox.js";
import MessageBox from "../MessageBox.js";
import Products from "../Product.js";
// Trocar todos os 'a' por Link
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://drivenzon.herokuapp.com/api/products");
        console.log(data)
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Main className="rows center">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </Main>
      )}

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
