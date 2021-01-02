import { auth, firestore } from "firebase";
import { authConstant } from "./constants";

// Registering a New User
export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();
    dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data);
        const currentUser = auth().currentUser;
        const name = `${user.firstName} ${user.lastName}`;
        currentUser
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            //Successfully updated
            db.collection("users")
              .add({
                firstName: user.firstName,
                lastName: user.lastName,
                uid: data.user.uid,
                createdAt: new Date(),
              })
              .then(() => {
                //Success
                const loggedInUser = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  uid: data.user.uid,
                  email: user.email,
                };
                localStorage.setItem("user", JSON.stringify(loggedInUser));
                console.log("User logged in successfully..........");
                dispatch({
                  type: `${authConstant.USER_LOGIN}_SUCCESS`,
                  payload: { user: loggedInUser },
                });
              })
              .catch((error) => {
                console.log(error);
                dispatch({
                  type: `${authConstant.USER_LOGIN}_FAILURE`,
                  payload: { error },
                });
              });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Loging in an already registered user
export const signin = (user) => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        console.log(data);

        const name = data.user.displayName.split(" ");
        const firstName = name[0];
        const lastName = name[1];

        const loggedInUser = {
          firstName,
          lastName,
          uid: data.user.uid,
          email: data.user.email,
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        dispatch({
          type: `${authConstant.USER_LOGIN}_SUCCESS`,
          payload: { user: loggedInUser },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: `${authConstant.USER_LOGIN}_FAILURE`,
          payload: { error },
        });
      });
  };
};

//Already logged in user
export const isLoggedInUser = () => {
  return async (dispatch) => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;

    if (user) {
      dispatch({
        type: `${authConstant.USER_LOGIN}_SUCCESS`,
        payload: { user },
      });
    } else {
      dispatch({
        type: `${authConstant.USER_LOGIN}_FAILURE`,
        payload: { error: "Login again please" },
      });
    }
  };
};

//Logging Out User
export const logout = (uid) => {
  return async (dispatch) => {
    dispatch({ type: `${authConstant.USER_LOGOUT}_REQUEST` });
    //Now lets logout user

    auth()
      .signOut()
      .then(() => {
        //successfully
        localStorage.clear();
        dispatch({ type: `${authConstant.USER_LOGOUT}_SUCCESS` });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: `${authConstant.USER_LOGOUT}_FAILURE`,
          payload: { error },
        });
      });
  };
};
