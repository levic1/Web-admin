import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Root from './utils/Root'
import Login from './pages/login'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Dashboard from './pages/dashboard'
import Categories from './components/categories'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<Root />}/>
      <Route 
        path="/admin-dashboard" 
        element={
          <ProtectedRoutes 
            requireRole={["admin"]}>
              <Dashboard />
          </ProtectedRoutes>} >
          <Route
            path='categories'
            element={<Categories />}
          />
          <Route
            path='products'
            element={<h1>products</h1>}
          />
          <Route
            path='suppliers'
            element={<h1>suppliers</h1>}
          />
          <Route
            path='orders'
            element={<h1>orders</h1>}
          />
          <Route
            path='review'
            element={<h1>profile</h1>}
          />
          <Route
            path='users'
            element={<h1>users</h1>}
          />
          <Route
            path='profile'
            element={<h1>profile</h1>}
          />
      </Route>
      <Route path="/customer/dashboard" element={<h1>admin Dashboard</h1>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<p className="font-bold text-3xl mt-20 ml-20"> Unauthorized user</p>} />
    </Routes>
   </Router>
  )
}

export default App
