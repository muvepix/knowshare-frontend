import React, { useReducer } from 'react';
import axios from 'axios';
import postContext from './postContext';
import postReducer from './postReducer';
import { GET_POSTS } from '../types';

const PostState = props => {
  const initialState = {
    posts: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPost = async () => {
    await axios.get(`http://localhost:3000/posts`).then(res => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        getPost,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
