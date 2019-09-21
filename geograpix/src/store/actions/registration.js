import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const hostURL = "//geograpics-staging.herokuapp.com";

export const registration = (id, values, history) => dispatch => {
  dispatch({ type: REGISTER_START });
  axios.put(`${hostURL}/users/${id}`, values)
        .then(res => {
          dispatch({ type: REGISTER_SUCCESS, payload: res.data });
          history.push('/dashboard');
        })
        .catch( err => {
          dispatch({ type: REGISTER_FAIL, payload: err });
        });
}