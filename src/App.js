import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NewOrder from './pages/NewOrder'
import Auth from './pages/Auth'
import OrderHistory from './pages/OrderHistory'
import Nav from './components/Nav'

function App() {
  
  const [user, setUser] = useState(null)
  
  return (
    <main className='App'>
      { user ? 
      <>
        <Nav />
        <Routes>
          <Route path='/orders' element={<OrderHistory/>} />
          <Route path='/orders/new' element={<NewOrder />} />
        </Routes>
      </>
        : 
        <Auth />
      }
    </main>
  )
}

export default App;
