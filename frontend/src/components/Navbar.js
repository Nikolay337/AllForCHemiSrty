import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const Navbar = () => (
  <Menu inverted secondary>
    <Menu.Item position='left'>
      <Button
        href='/'>
        AllForCHemiSrty
      </Button>
    </Menu.Item>
    <Menu.Item position='right'>
      <Button
        color='teal'
        style={{ marginLeft: '0.5em' }}
        href='/login'>
        Вход  
      </Button>
      <Button
        color='teal'
        style={{ marginLeft: '0.5em' }}
        href='/register'>
        Регистрация
      </Button>
    </Menu.Item>
  </Menu>
)

export default Navbar