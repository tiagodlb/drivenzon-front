import { useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useEffect } from "react";
import { useContext } from "react";

export default function CartPage(props) {
  const { id } = useParams();
  const navigator = useNavigate()
  const { search } = useLocation();
  const [searchParms] = useSearchParams();
  const productID = id;
  const qty = search ? Number(search.split("=")[1]) : 1;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log({ productID, qty, qtyParam: Number(searchParms.get("qty")) });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/${productID}`);
  setCartItems({cart: { cartItems }});
  if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id) {
    if(!cartItems) return`Can't Add To Cart. Buy only from ${cartItems[0].seller.seller.name} in this order`
  } else {
    setCartItems({
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        seller: data.seller,
        qty,
      },
    })
    };
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.cartItems)
    );
  }
   catch (error) {
        console.log(error);
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log(cartItems);
    };
    fetchData();
    if (productID) {
      console.log(productID, qty);
    }
  }, [productID, qty]);

  const removeFromCartHandler = (id) => {
    // delete 
  };

  const checkoutHandler = () => {
    navigator('/shipping');
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
          <div className="row top">
            <div className="col-2">
              <h1>Shopping Cart</h1>
              {cartItems.length === 0 ? (
                <MessageBox>
                  Cart is empty. <Link to="/">Go Shopping</Link>
                </MessageBox>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          <select
                            value={item.qty}
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>${item.price}</div>
                        <div>
                          <button
                            type="button"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <h2>
                      Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                      items) : $
                      {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h2>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={checkoutHandler}
                      className="primary block"
                    >
                      Proceed to Checkout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
