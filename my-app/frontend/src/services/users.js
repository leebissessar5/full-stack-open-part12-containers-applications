import axios from 'axios'

const baseUrl = '/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const userService = { getAll }
export default userService
