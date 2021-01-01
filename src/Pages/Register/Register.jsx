import React, { useState } from "react";
import "./Register.css";
import Layout from "../../Components/Layout";
import Card from "../../Components/UI/Card";
import { signup } from "../../Redux/actions/authAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault()
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };

  return (
    <Layout>
      <div className="main">
        <Card>
          <form action="" className="form" onSubmit={registerUser}>
            <div className="login_text">
              <h1>Register</h1>
            </div>
            <div>
              <input
                name="first name"
                type="text"
                value={firstName}
                placeholder="First Name"
                className="input"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <input
                name="last name"
                type="text"
                value={lastName}
                placeholder="Last Name"
                className="input"
                onChange={(e) => setlastName(e.target.value)}
              />
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
              <button className="button">Register</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
