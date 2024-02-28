import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import FormPage from './pages/FormPage'
import ShowPage from './pages/ShowPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/form' element={<FormPage/>}/>
          <Route path='/show' element={<ShowPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
