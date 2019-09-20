import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const hostURL = "////geograpics-staging.herokuapp.com";

export const registration = (id, values) => dispatch => {
  dispatch({REGISTER_START});
  axios.put(`//geograpics-staging.herokuapp.com/users/${id}`, values)
        .then(res => res ? alert('yay') : alert('nay'));
}