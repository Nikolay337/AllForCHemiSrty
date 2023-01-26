import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Navbar = () => (
  <Menu inverted secondary color='purple'>
    <Menu.Item position='left'>
      <Button
        style={{backgroundColor: 'none'}}
        href='/'
      >
        AllForCHemiSrty
      </Button>
    </Menu.Item>
    <Menu.Item position='right' style={{ padding: '2rem' }}>
      <Button
        color='purple'
        style={{ marginLeft: '0.5em', fontSize: '1.25rem' }}
        href='/login'>
        Вход  
      </Button>
      <Button
        color='green'
        style={{ marginLeft: '0.5em', fontSize: '1.25rem' }}
        href='/register'>
        Регистрация
      </Button>
    </Menu.Item>
  </Menu>
)

export default Navbar