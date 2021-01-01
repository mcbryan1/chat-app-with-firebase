/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./Login.css";
import Layout from "../../Components/Layout";
import Card from "../../Components/UI/Card";
import { signin } from "../../Redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
  };


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }

  return (
    <Layout>
      <div className="main">
        <Card>
          <form action="" className="form" onSubmit={userLogin}>
            <div className="login_text">
              <h1>Login</h1>
            </div>
            <div>
              <input
                name="email"
                type="text"
                value={email}
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button className="button">Login</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
