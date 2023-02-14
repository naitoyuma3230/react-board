import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { createGlobalStyle } from 'styled-components'
import { Test } from "./Test"



function App() {
  const [count, setCount] = useState(0)

  const GlobalStyle = createGlobalStyle`
  html, body, #app{
    height: 100%
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 
    'Helvetica Neue', sans-serif;
    overflow-wrap: break-word;
  }
`


  return (
    <>
      <GlobalStyle />
      <Test/>
    </>
  )
}

export default App
