import React, { useState } from "react";
import CheckoutSteps from "./../CheckoutSteps.js";
import styled from "styled-components";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

export default function CheckOutPage(props) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Agradecemos a preferencia");
  };

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
          <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
              <div>
                <h1>Shipping Address</h1>
              </div>
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <label />
                <button className="primary" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
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
