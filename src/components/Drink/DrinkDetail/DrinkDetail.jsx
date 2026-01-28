import { useState, useEffect, useContext } from 'react'
import * as drinkService from '../../../services/drinkService.js'
import { useParams, Link, useNavigate } from 'react-router'
import { UserContext } from '../../../contexts/UserContext.jsx'
import './DrinkDetail.css'

function DrinkDetail() {
  const [drink, setDrink] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

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
    const deletedDrink = await drinkService.deleteOne(id)
    if (deletedDrink) {
      navigate('/')
    } else {
      console.error('something went wrong')
    }
  }

  if (!id) return <h1>Loading ...</h1>
  if (!drink) return <h1>Loading ...</h1>

  return (
    <div>
      <Link to="/">Home</Link>
      <li></li>

      <h1>name: {drink.name}</h1>
      <h2>inStock: {drink.in_stock}</h2>
      <h2>Rating: {drink.rating}</h2>
      <ul>
        reviews:
        {drink.reviews &&
          drink.reviews.length &&
          drink.reviews.map((r) => <li key={r.id}>{r.content}</li>)}
      </ul>

      <Link to={`/drinkList/${id}/edit`}>Edit Drink</Link>
      <button onClick={handleDelete}>Delete Drink</button>
    </div>
  )
}
export default DrinkDetail
