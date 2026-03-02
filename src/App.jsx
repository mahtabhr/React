import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import RootLayout from './components/layouts/RootLayout'
import Contact from './components/pages/Contact'
import Error from './components/pages/Error'



function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element ={<RootLayout />}>
       <Route index element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
