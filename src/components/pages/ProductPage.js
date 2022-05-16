import React from "react";
import Rating from "./../Rating.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingBox from "../LoadingBox.js";
import MessageBox from "../MessageBox.js";


export default function ProductPage(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [productsDetails, setProductsDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        console.log(data);
        setLoading(false);
        setProductsDetails(data);
      } catch (error) {
        if (error.response && error.response.data.message)
          setError(error.response.data.message);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function addToCartHandler(e) {
    e.preventDefault();
    console.log(223232)
    navigate(`/cart/${id}?qty=${qty}`);
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
            <Link to={"/"}>
              <p>Back to Result</p>
            </Link>
            <div>
              <div className="row top">
                <div className="col-2">
                  <img
                    className="large"
                    src={productsDetails.image}
                    alt={productsDetails.name}
                  />
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{productsDetails.name}</h1>
                    </li>
                    <li>
                      <Rating
                        rating={productsDetails.rating}
                        numReviews={productsDetails.numReviews}
                      ></Rating>
                    </li>
                    <li>Price : ${productsDetails.price}</li>
                    <li>
                      Description: <p>{productsDetails.descripttion}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">{productsDetails.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            {productsDetails.countInStock > 0 ? (
                              <span className="success">In Stock</span>
                            ) : (
                              <span className="error">Unavailable</span>
                            )}
                          </div>
                        </div>
                      </li>
                      {productsDetails.countInStock > 0 && (
                        <>
                          <li>
                            <div className="row">
                              <div className="label">Qty</div>
                              <div>
                                <select
                                  value={qty}
                                  onChange={(event) =>
                                    setQty(event.target.value)
                                  }
                                >
                                  {[
                                    ...Array(
                                      productsDetails.countInStock
                                    ).keys(),
                                  ].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button
                              onClick={addToCartHandler}
                              className="primary block"
                            >
                              Add to cart
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

  p {
    margin-right: 100px;
  }
`;

const Footer = styled.footer`
  grid-area: Footer;
  background-color: #eb3c85;
  color: #fffdfd;
`;
