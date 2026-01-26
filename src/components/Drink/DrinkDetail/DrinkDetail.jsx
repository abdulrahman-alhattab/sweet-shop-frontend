import { useState, useEffect, useContext } from 'react'
import * as drinkServices from '../../../services/drinkService.js'
import { useParams, Link, useNavigate } from 'react-router'
import { UserContext } from '../../../contexts/UserContext.jsx'
import styles from './DrinkDetail.css'

function DrinkDetail() {
  const [drink, setDrink] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
}
useEffect(() => {
  const getOneDrink = async (id) => {
    try {
      const data = await drinkService.show(id)
      setDrink(data)
    } catch (err) {
      console.log(err)
    }
  }
  if (id) getOneDrink(id)
}, [id])

const handleDelete = async () => {
  const deletedDrink = await drinkServices.deleteOne(id)
  if (deletedDrink) {
    navigate('/')
  } else {
    console.error('something went wrong')
  }
}
