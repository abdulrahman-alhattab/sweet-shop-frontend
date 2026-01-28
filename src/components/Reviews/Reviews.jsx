import { useState, useEffect, useContext } from 'react'
import * as drinkService from '../../../services/drinkService.js'
import { useParams, Link, useNavigate } from 'react-router'
import { UserContext } from '../../../contexts/UserContext.jsx'
import './DrinkDetail.css'
import React from 'react'

function Reviews() {
  const [drink, setDrink] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  return <div></div>
}

export default Reviews
