import axios from 'axios'
import pMinDelay from 'p-min-delay'

// 함수 설정 => create => default
// 설정이 default와 다른 경우. (제일 많이 사용하는 방식)
const apiClient = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: '/api',
  timeout: 3000,
  // common - 공용
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
apiClient.defaults.headers['post'] = { 'Content-Type': 'application/json' }
apiClient.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    return response
  },
  function (error) {
    // 오류 응답을 처리
    return Promise.reject(error)
  },
)

export const getContactList = (no = 1, size = 10) => {
  return pMinDelay(apiClient.get(`/contacts`, { params: { pageno: no, pagesize: size } }), 1500)
}
export const getContact = (no) => apiClient.get(`/contacts/${no}`)
export const addContact = (data) => apiClient.post(`/contacts`, data)
export const updateContact = (data) => apiClient.put(`/contacts/${data.no}`, data)
export const deleteContact = (no) => apiClient.delete(`/contacts/${no}`)
