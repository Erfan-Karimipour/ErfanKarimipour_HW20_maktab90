import { useState } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './leyouts/Container';
import { Providers } from './context/Context';
import { useForm } from './context/Context';


function App() {
  return (
    <Providers>
      <div className='bg-[#111111] h-screen flex justify-center items-center'>
        <Container />
      </div>
    </Providers>
  )
}

export default App
