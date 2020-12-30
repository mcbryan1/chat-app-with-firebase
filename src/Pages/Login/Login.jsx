import React, { useState } from "react";
import "./Login.css";
import Layout from "../../Components/Layout";
import Card from "../../Components/Layout/Ui/Card";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="main">
        <Card>
          <form action="" className="form">
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
