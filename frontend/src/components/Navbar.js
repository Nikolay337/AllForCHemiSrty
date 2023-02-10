import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Navbar = () => (
  <Menu inverted secondary color='purple'>
    <Menu.Header position='left'href='/' style={{color: 'white', textAlign: 'center', fontSize: '2rem', padding: '2rem', fontWeight: 'bold'}}>
      AllForCHemiStry
    </Menu.Header>
    <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
      <Button color='purple' href='/login'>
        Вход  
      </Button>
      <Button color='green' href='/register'>
        Регистрация
      </Button>
    </Menu.Item>
  </Menu>
)

export default Navbar