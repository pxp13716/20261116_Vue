import axios from 'axios';
import pMinDelay from 'p-min-delay'
// const BASE_URI = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',   //'/api',
  timeout: 3000,
  headers: {},             // common => default와 동일    
})
apiClient.defaults.headers['post'] = 'application/json';

export const getContactList = async (no = 1, size = 5) => {
  // 적용 순서: 1. 함수내부의 속성 => 2. create => 3. default
  return pMinDelay(apiClient.get(`/contacts`, { params: { pageno: no, pagesize: size } }), 1000);
};
export const getContact = async (no) => {
  return apiClient.get(`/contacts/${no}`)
};
// data => { name: ?, tel: ?, address: ? }
export const addContact = async (data) => {
  return apiClient.post(`/contacts`, data)
};
// data => { no: ?, name: ?, tel: ?, address: ? }
export const updateContact = async (data) => {
  return apiClient.put(`/contacts/${data.no}`, data)
};
export const deleteContact = async (no) => {
  return apiClient.delete(`/contacts/${no}`)
};
export const updatePhoto = async (no, file) => {
  const formData = new FormData();
  formData.append('photo', file);

  return apiClient.post(`/contacts/${no}/photo`, formData, {
    headers: { 'Content-Type': null }
  })
};
