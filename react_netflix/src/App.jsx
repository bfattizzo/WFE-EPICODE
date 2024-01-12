/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CustomNavbar from './components/molecole/CustomNavbar';
import CustomFooter from './components/organismi/CustomFooter';
import CustomMain from './components/organismi/CustomMain';


function App() {

  return (
    <>
      <div style={{backgroundColor: 'black'}}>
        <CustomNavbar />
        <CustomMain />
        <CustomFooter />
      </div>
    </>
  )
}

export default App
