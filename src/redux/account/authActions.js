import axios from "axios";
// import { Alert } from "react-bootstrap";
// import { toast } from "react-toastify";

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(
        process.env.REACT_APP_AUTH,
        { email, password },
        {
          headers: {
            "x-auth-secret": process.env.REACT_APP_X_SECRET,
            "Content-Type": "application/json",
          },
        }
      )
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        // alert(error.response.data)
        dispatch({
          type: "SIGN_IN_FAILED",
          error: error.response.data,
        });
        // toast(error.response.data, {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
