import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const buyItem = async (transactionReceipt) => {
  await api.post('/store', {
    'token': transactionReceipt
  });
}

const getUserData = async (token) => {
  const {data: userData} = await api.get('/user', {
    headers: { 'x-extension-jwt': token }
  });
  return userData;
}

const putColor = async (colorId, token) => {
  await api.put('/colors', { color_id: colorId }, {
    headers: { 'x-extension-jwt': token }
  });
}

const getStoreColors = async () => {
  const { data: { colors } } = await api.get('/store');
  return colors;
}

export { buyItem, getUserData, putColor, getStoreColors };