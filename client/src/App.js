import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import HomeComponent from "./components/HomeComponent";
import SignInComponent from "./components/SignInComponent";
import CartComponent from "./components/CartComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProductsComponent from "./components/ProductsComponent";
import ProductsInfoComponent from "./components/ProductsInfoComponent";
import NavbarComponent from "./components/NavbarComponent";
import "./App.css";

function App(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [tf, setTf] = useState(false);
  // console.log("userInfo", userInfo);
  // if (tf) {
  //   return <Redirect to="/products" />;
  // }
  // if (userInfo != null) {
  //   console.log(tf);
  //   setTf(true);
  // }

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "/products";

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [userInfo, redirect, props.history]);

  // const signoutHandler = () => {
  //   dispatch(signout());
  // };

  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/cart/:id?" component={CartComponent} />
        <Route exact path="/" component={withRouter(HomeComponent)} />
        <Route path="/signin" component={withRouter(SignInComponent)} />
        <Route path="/register" component={withRouter(RegisterComponent)} />
        <Route
          exact
          path="/products"
          component={withRouter(ProductsComponent)}
        />
        <Route
          path="/products/:id"
          component={withRouter(ProductsInfoComponent)}
        />
      </Switch>
    </Router>
  );
}

export default App;
