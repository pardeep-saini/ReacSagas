import axios from 'axios';
import { API_PREFIX } from './config';
import { message } from 'antd';

// Define variables to be used for Postman Mocks
//
// const POSTMAN_MOCK_URL = 'https://dbf75e03-2a8b-4137-98bf-56d09a516322.mock.pstmn.io/'
const POSTMAN_MOCK_URL = '';
//
// const POSTMAN_MOCK_SECURITY_KEY = 'your_security_key';
const POSTMAN_MOCK_SECURITY_KEY = '';
//
// POSTMAN_API_ENDPOINTS_TO_MOCK needs an array of endpoint objects, each containing a "url" and "method" that you want to mock.
// If the array is empty or not defined, the mock will not be active
// const POSTMAN_API_ENDPOINTS_TO_MOCK = [
//  {url: 'documents/14355852', method: 'GET'}
// ]
const POSTMAN_API_ENDPOINTS_TO_MOCK = [];

//Axios will use this in front of all api calls
axios.defaults.baseURL = API_PREFIX;

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.headers.common['Pragma'] = 'no-cache';
axios.defaults.headers.common['Expires'] = -1;
axios.defaults.headers.common['Access-Control-Allow-Origin']="*";
axios.defaults.headers.common['Access-Control-Allow-Methods']="GET,PUT,POST,DELETE,PATCH,OPTIONS";
//axios.defaults.timeout=200000;
export const setAuthToken = token => {
  axios.defaults.headers.common['X-Auth-Token'] = token;
};

export const get = async (url, config) => {
  console.log("UrLData", url, config,API_PREFIX+url)
  return (await axios.get(API_PREFIX+url, config)).data;
};

export const getBlob = async (url, config = {}) => {
  config.responseType = 'blob';
  return await axios.get(url, config);
};

export const getImageBase64 = async url => {
  return await axios
    .get(url, { responseType: 'arraybuffer' })
    .then(
      response =>
        `data:${response.headers['content-type']};base64,${btoa(
          String.fromCharCode(...new Uint8Array(response.data))
        )}`
    )
    .catch(error => {
      console.log('getImageBase64 failed', error);
      // TODO: pass back a default/empty/error image in the future?
      return null;
    });
};

export const post = async (url, data) => {
  return (await axios.post(url, data)).data;
};

export const postFile = async (url, data) => {
  return (await axios.post(url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })).data;
};

export const put = async (url, data) => {
  return (await axios.put(url, data)).data;
};

export const deleteRec = async url => {
  return (await axios.delete(url)).data;
};

export const deleteRecWithData = async (url, data) => {
  return (await axios({ method: 'delete', url: url, data: data })).data;
};

export const generateApiParameters = (pagination, filters, sorter) => {
  let params = {
    limit: pagination.pageSize,
    offset: (pagination.current - 1) * pagination.pageSize,
    sort:
      sorter.field && `${sorter.order === 'descend' ? '-' : '+'}${sorter.field}`
  };
  Object.keys(filters).forEach(item => {
    if (filters[item]) {
      params[item] = filters[item][0];
    }
  });
  return params;
};

// Interceptor Functions

export const passThroughResponse = response => response;



export const handleRequestError = error => {
  return Promise.reject(error);
};

export const handleSimpleApiError = (error, intl) => {
  const { response } = error;
  if (!response) {
    console.error(error);
    message.error(intl.formatMessage({ id: 'server.error' }));
  } else {
    if (response.data && response.data.errors) {
      message.error(response.data.errors[0].message);
    } else {
      console.error(error);
      message.error(intl.formatMessage({ id: 'server.error' }));
    }
  }
};
