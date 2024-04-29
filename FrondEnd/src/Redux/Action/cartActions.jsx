import axios from "axios";
import * as actionTypes from '../Constance/cartConstance';

const URL = "http://localhost:8000";

export const addTocart = (id, quantity) => async(dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/product/${id}`);
      dispatch({ type: actionTypes.ADD_TO_CART, payload: {...data, quantity }});
    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
    }
}

export const removeFromcart = (id) => (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
}