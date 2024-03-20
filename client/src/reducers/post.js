const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "END_LOADING":
      return { ...state, isLoading: false };

    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload,
      };

    case "CREATE_POSTS":
      return { ...state, posts: [...state, action.payload] };

    default:
      return state;
  }
};

export default posts;
