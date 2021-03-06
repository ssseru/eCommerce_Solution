import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
function HomeComponent(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [tf, setTf] = useState(false);
  // console.log("userInfo", userInfo);
  if (tf) {
    props.history.push("/products");
  }
  if (userInfo != null && !tf) {
    setTf(true);
  }
  return (
    <Container style={{ height: "75vh" }} className="container center">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>eCommerce</b> App made for shopping the TRENDS{" "}
            <span style={{ fontFamily: "monospace" }}>of the</span> World
          </h4>
          <p
            className="flow-text grey-text text-darken-1"
            style={{ fontSize: "20px" }}
          >
            To view the Catalog, SignIn or Create an account
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/signin"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large btn-flat waves-effect green black-text waves-light hoverable accent-3"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeComponent;
