import { useEffect, useState, useContext } from 'react'
import { Link, useSearchParams } from 'react-router'
import { UserContext } from '../../../contexts/UserContext'
import * as productService from '../../../services/drinkService.js'
import styles from './ProductList.module.css'

const drinkList = () => {
  const { user } = useContext(UserContext)
}
