import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App
