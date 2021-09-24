import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    email: null,
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        const user = jwtDecode(action.token); 
        return {
          ...initialState,
          token: action.token,
          email: user.email,
        };
      case "SIGN_OUT":
        localStorage.removeItem("token");
        return {
          token: null,
          email: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;