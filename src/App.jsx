import React, {useState} from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'

const App = () => {
  const [menu, setMenu] = useState(true)
  
  return (
    <div className='container'>
      <Header isMenuOpen={menu} setIsMenuOpen={setMenu} />

      <div className='main'>
        <Menu isMenuOpen={menu} />

        <div className="content_div">
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App