import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'
import User from './pages/user'
import Search from './pages/search'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Link to={'/'}>Home</Link>&nbsp;
      <Link to={'/about'}>About</Link>&nbsp;
      <Link to={'/contact'}>Contact</Link>&nbsp;
      <Link to={'/user/id'}>User</Link>&nbsp;
      <Link to={'/search?keyWord=somekeyword'}>Search</Link>

      <br/><br/>

      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>

      <br/><br/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/user/:id' element={<User/>}></Route>
        <Route path='search' element={<Search/>} ></Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
