import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import DishesPage from './pages/DishesPage/DishesPage'
import OrdersPage from './pages/DishesPage/OrdersPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/dishes' element={<DishesPage />}></Route>
        <Route path='/orders' element={<OrdersPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
