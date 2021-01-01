import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./Redux/store";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPykrdmJNZ6PuC1-IeF6IlRNmmW01_EQ",
  authDomain: "messenger-appp.firebaseapp.com",
  projectId: "messenger-appp",
  storageBucket: "messenger-appp.appspot.com",
  messagingSenderId: "78452944692",
  appId: "1:78452944692:web:5987f166c087c4ceaf7f61",
  measurementId: "G-MWE56BKG97",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
