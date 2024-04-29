import axios from 'axios'

const URL = 'http://localhost:8000';

// sign up cheyyan ulla api
export const authenticateSignup = async(data) => {
    try {
       return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup api',error);
    }
};
//log in cheyyan ulla api
export const authenticateLogin = async(data) => {
    try {
       return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login api',error);
        return error.response
    }
};