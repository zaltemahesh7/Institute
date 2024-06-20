import { useState } from 'react'
import NavBar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
