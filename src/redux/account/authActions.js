import axios from "axios";

export const signIn = (email,password) => {
    return (dispatch) => {
      axios
        .post(process.env.REACT_APP_AUTH,{email,password},
          {
          headers: {
            'x-auth-secret':process.env.REACT_APP_X_SECRET,
            'Content-Type': 'application/json'
        }})
        .then((token) => {
          localStorage.setItem("token", token.data);
          dispatch({
            type: "SIGN_IN",
            token: token.data,
          });
        })
        .catch((error) => {
          console.log(error.response);
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