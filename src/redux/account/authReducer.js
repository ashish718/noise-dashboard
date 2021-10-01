import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    email: null,
    error:null
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        const user = jwtDecode(action.token); 
        return {
          ...initialState,
          token: action.token,
          email: user.email,
          error:null
        };
        case "SIGN_IN_FAILED":
          return {
            ...initialState,
            error:action.error
          };
      case "SIGN_OUT":
        localStorage.removeItem("token");
        return {
          token: null,
          email: null,
          error:null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;