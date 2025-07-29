import React from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'

const App = () => {
  return (
    <div className='container'>
      <Header />

      <div className='main'>
        <Menu />
        
        <div className="content_div">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App