import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import Courses from './components/Courses.jsx'
import Dashboard from './components/Dashboard'
import { Auth0Provider } from '@auth0/auth0-react'
import Add_Course from './components/Add_Course.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Auth0Provider
    domain="dev-78b3qih8cschcqjv.us.auth0.com"
    clientId="omvAAUXwvdMFQTJZs3ndqGupoCXtaufP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add_course" element={<Add_Course/>}></Route>
      </Routes>
    </Router>
  </Auth0Provider>
  </>
)
