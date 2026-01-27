import { useEffect, useState, useContext } from 'react'
import { Link, useSearchParams } from 'react-router'
import { UserContext } from '../../../contexts/UserContext'
import * as drinkService from '../../../services/drinkService.js'
import styles from './DrinkList.module.css'

const NotDrinkList = () => {
  const { user } = useContext(UserContext)
  const [drinks, setDrinks] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const getAllDrinks = async (query) => {
    try {
      const data = await drinkService.index(query)
      console.log(data)
      setDrinks(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getStockStatus = (stock) => {
    if (stock === 0 || stock === undefined)
      return { class: styles.outOfStock, text: 'Currently unavailable' }
    if (stock < 10)
      return { class: styles.lowStock, text: `Only ${stock} left in stock` }
    return { class: styles.inStock, text: 'In Stock' }
  }

  const formatPrice = (price) => {
    const priceStr = price.toFixed(3)
    const [whole, cents] = priceStr.split('.')
    return { whole, cents }
  }

  useEffect(() => {
    const query = searchParams.get('name')
    getAllDrinks(query)
  }, [searchParams])

  if (!drinks.length) <h1>Loading...</h1>

  return (
    <div>
      <h1>List?? go away this is halal place</h1>
      <h2>your Help!/SoS privileges has been taken away</h2>
      <li></li>
      <h4>tracing location...</h4>
    </div>
  )
}

export default NotDrinkList
