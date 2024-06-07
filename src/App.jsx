import Home from './pages/Home'
import About from './pages/About'
import AddEdit from './pages/AddEdit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/add' element={<AddEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
