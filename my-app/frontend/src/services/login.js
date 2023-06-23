import axios from 'axios'
const baseUrl = '/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const loginService = { login }
export default loginService
