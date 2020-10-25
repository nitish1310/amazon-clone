import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
import Register from "./Register";
import FooterLogin from "./FooterLogin";
import alanBtn from "@alan-ai/alan-sdk-web";
import ProductLists from "./ProductLists";

const promise = loadStripe(
  "pk_test_51HW2EnCRlwJlGJf5BiIJFw2qFX6UimCYXHFiRLTb9Qa8Vc6pQIK3AWUrWrOcfWtFjRPXJ57vzjyZ1M1xYIyF16YL00sj5Exqv4"
);

function App() {
  //contect API
  const [{}, dispatch] = useStateValue();
  const [allProductList, setAllProductList] = useState([]);

  useEffect(() => {
    //It will only run once when the app component loads

    const alanKey =
      "55eb76a3057fcd338bfd886a91be72b92e956eca572e1d8b807a3e2338fdd0dc/stage";

    alanBtn({
      key: alanKey,
      onCommand: ({ command, productList }) => {
        if (command === "newProducts") {
          console.log(productList);
          setAllProductList(productList);
        }
      },
    });

    //Attach this listner after load
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          //fire of event and shoot event into datalayer
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // The user is logged out
      }
    });
  }, []);

  return (
    // BEM

    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <FooterLogin />
          </Route>
          <Route path="/register">
            <Register />
            <FooterLogin />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/product">
            <Header />
            <ProductLists productLists={allProductList} />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
