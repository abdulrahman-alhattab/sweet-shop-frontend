import axios from 'axios'
import { authHeaders } from './authService'

const BASE_URL = `${import.meta.VITE_API_URL}/drinks`

const show = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, authHeaders())
    return response.data.drink
  } catch (err) {
    console.log(err)
  }
}

const create = async (formData) => {
  try {
    const response = await axios.post(BASE_URL, formData, authHeaders())
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const update = async (drinkId, formData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${drinkId}`,
      formData,
      authHeaders()
    )
    return response.data.drink
  } catch (error) {
    console.error(error)
  }
}

const deleteOne = async (drinkId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${drinkId}`, authHeaders)
    return response.data.drink
  } catch (error) {
    console.error(error)
  }
}

export { show, create, update, deleteOne }
