import { useState, useContext } from 'react'
import * as drinkService from '../../../services/drinkService.js'
import { useNavigate, Navigate, Link } from 'react-router'
import { UserContext } from '../../../contexts/UserContext'
import styles from './EditDrinkForm.module.css'

const EditDrink = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [formState, setFormState] = useState({
    name: '',
    inStock: '',
    rating: 0
  })

  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    const newFormData = { ...formState, [name]: value }
    setFormState(newFormData)
  }
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const payload = { ...formState }
      payload.price = Number(payload.rating)

      const updatedProduct = await productService.update(id, payload)

      setMessage('drink created successfully!')
      navigate('/drinkList')
    } catch (error) {
      console.error(error)
      setMessage(
        'Something went wrong. Please check your inputs and try again.'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Drink Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Enter Drink name"
        required
      />

      <label htmlFor="number" className={styles.label}>
        Drink Rating:
      </label>
      <input
        type="number"
        id="rating"
        name="rating"
        value={formState.rating}
        onChange={handleChange}
        placeholder="Enter rating"
        required
      />

      <label htmlFor="boolean" className={styles.label}>
        inStock? :
      </label>
      <input
        type="checkbox"
        id="inStock"
        name="in_stock"
        value={formState.in_stock}
        onChange={handleChange}
        placeholder="is it in stock?"
        required
      />
      <br />
      <button type="submit" className={styles.submitButton}>
        <span>✓</span>
        Edit Product
      </button>
    </form>
  )
}

export default EditDrink
