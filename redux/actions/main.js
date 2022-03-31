import * as t from "../types";

export const setInfo = (name) => dispatch => {
    dispatch({
        type: t.SET_NAME,
        payload: name
    });
}

export const setPosts = (posts) => dispatch => {
    dispatch({
        type: t.SET_POSTS,
        payload: posts
    });
}