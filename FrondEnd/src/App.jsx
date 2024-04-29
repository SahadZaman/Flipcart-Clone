import React from 'react'

//Components
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Dataprovider from './Context/Dataprovider'
import DetailView from './Components/Details/DetailView'
import Cart from './Components/Cart/Cart'

// routing cheyyan 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material'

const App = () => {
  return (
    <>
      <Dataprovider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: "54px" }}>
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Dataprovider>
    </>
  )
}

export default App