import React from 'react'
import { Button, Menu, Image } from 'semantic-ui-react'
import logo from '../assets/logo.png'

const Navbar = () => (
  <Menu inverted secondary color='purple'>
    <Menu.Item position='left'>
      <Image 
      src={logo} 
      style={{
        backgroundColor: 'none',  
        width: '5rem', 
        height: '5rem'
      }}
        href='/' />
    </Menu.Item>
    <Menu.Item position='right' style={{ padding: '2rem' }}>
      <Button
        color='purple'
        style=
        {{ 
          marginLeft: '0.5em', 
          fontSize: '1.25rem' 
        }}
        href='/login'>
        Вход  
      </Button>
      <Button
        color='green'
        style=
        {{ 
          marginLeft: '0.5em', 
          fontSize: '1.25rem' 
        }}
        href='/register'>
        Регистрация
      </Button>
    </Menu.Item>
  </Menu>
)

export default Navbar