import {BASE_API_URL} from '../utils/globalVariables';
import axios from 'axios';

const getRequest = async ({extension, params}) => {
  const url = `${BASE_API_URL}/${extension}.json`;
  try {
    // TODO: add loading after implementation
    const {data} = await axios.get(url, params);
    return data;
  } catch (err) {
    // TODO: add error handling
    console.tron.log('An error occured');
  }
};

const postRequest = async ({extension, params}) => {
  const url = `${BASE_API_URL}/${extension}.json`;
  try {
    // TODO: add loading after implementation
    const {data} = await axios.post(url, params);
    return data;
  } catch (err) {
    // TODO: add error handling
    console.tron.log('An error occured');
  }
};

export {getRequest, postRequest};
