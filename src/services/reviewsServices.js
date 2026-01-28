import axios from 'axios'
import { authHeaders } from './authService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/reviews`

const create = async (formData) => {
  try {
    const response = await axios.post(BASE_URL, formData, authHeaders())
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
const update = async (reviewId, formData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${reviewId}`,
      formData,
      authHeaders()
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
const deleteOne = async (reviewId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/${reviewId}`,
      authHeaders()
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { create, update, deleteOne }
