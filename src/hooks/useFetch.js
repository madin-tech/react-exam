import axios from "axios";
import { useEffect, useReducer } from "react";

const useFetch = (url) => {
  const initialState = {
    data: [],
    isLoading: false,
    error: "",
  };
  function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
      case "data":
        return { ...state, data: payload };
      case "load":
        return { ...state, isLoading: !state.isLoading };
      case "err":
        return { ...state, error: payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "load",
    });
    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: "data",
          payload: res.data.posts,
        });
      })
      .catch((err) =>
        dispatch({
          type: "err",
          payload: err.message || "Xatolik",
        })
      )
      .finally(() =>
        dispatch({
          type: "load",
        })
      );
  }, []);
  return state;
};

export default useFetch;
