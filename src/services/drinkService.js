import axios from 'axios'
import { authHeaders } from './authService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/drinks`

console.log(BASE_URL)
const index = async (query) => {
  try {
    const url = query ? `${BASE_URL}?q=${query}` : BASE_URL
    const response = await axios.get(url)
    console.log('response')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const show = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, authHeaders())
    return response.data
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
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const deleteOne = async (drinkId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${drinkId}`, authHeaders)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { index, show, create, update, deleteOne }
