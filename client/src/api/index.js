import axios from "axios";

const baseURL = "http://localhost:5000";

const config = { headers: { "Content-Type": "application/json" } };

export const login = (formData) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${baseURL}/user/signin`,
      formData,
      config
    );

    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.post(`${baseURL}/user/signup`, formData, config);

    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = (post) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    console.log(post);
    dispatch({ type: "START_LOADING" });
    const { data } = await axios.post(
      `${baseURL}/user/createPost`,
      post,
      config
    );

    dispatch({ type: "CREATE_POSTS", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });

    const { data } = await axios.get(`${baseURL}/user/getPosts`);

    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};
