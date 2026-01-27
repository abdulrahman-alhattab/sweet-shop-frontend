import { useContext } from 'react'
import { Routes, Route } from 'react-router'

import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm'
import SignInForm from './components/SignInForm/SignInForm'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import DrinkList from './components/Drink/Drinklist/DrinkList'
import NotDrinkList from './components/Drink/Drinklist/NotDrinkList'
import DrinkDetail from './components/Drink/DrinkDetail/DrinkDetail'
import DrinkForm from './components/Drink/CreateDrinkForm/CreateDrinkForm'
import EditDrink from './components/Drink/EditDrinkForm/EditDrinkForm'
import { UserContext } from './contexts/UserContext'

const App = () => {
  // Access the user object from UserContext
  // This gives us the currently logged-in user's information (username, email) that we extract from the token
  const { user } = useContext(UserContext)

  return (
    <>
      <NavBar />
      <Routes>
        {/* if the user is logged in we have the user object else we have the user set to null */}
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/drinkList" element={<DrinkList />} />
        <Route path="/notDrinkList" element={<NotDrinkList />} />
        <Route path="/drinkList/:id" element={<DrinkDetail />} />
        <Route path="/drinkList/create" element={<DrinkForm />} />
        <Route path="/drinkList/:id/edit" element={<EditDrink />} />
      </Routes>
    </>
  )
}

export default App
