const posts = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify(action.payload));

      return { ...state, authData: action.payload };

    case "LOGOUT":
      localStorage.removeItem("profile");

      return { ...state, authData: null };

    default:
      return state;
  }
};

export default posts;
