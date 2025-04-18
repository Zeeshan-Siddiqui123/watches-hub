import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './Routes';
import Footer from './Components/Footer';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          
          <Route path='*' element={<div className='w-[500px] h-[400px] bg-slate-100 rounded-lg flex items-center justify-center ml-[400px] mt-[100px] mb-[100px] flex-col gap-4'><div><h1 className='text-red-700'>404 Error</h1></div>
          <div><h1>Page Not Found</h1></div></div>} />
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
