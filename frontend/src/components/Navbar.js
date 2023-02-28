import React, {useState} from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function removeToken() {
    localStorage.removeItem('user');
  }

  return (
    <Menu inverted secondary color='purple'>
      <Menu.Header position='left' href='/home' style={{color: 'white', textAlign: 'center', fontSize: '2rem', padding: '2rem', fontWeight: 'bold'}}>
        AllForCHemiStry
      </Menu.Header>
      {!user ? 
        <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
          <Button color='purple' href='/'>
            Вход  
          </Button>
          <Button color='green' href='/register'>
            Регистрация
          </Button>
        </Menu.Item>
        :
        <Menu.Item position='right' style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {user.name}
          <Button onClick={removeToken}>
            <Icon name='sign-out' />
          </Button>
        </Menu.Item>
    }
    </Menu>
  );
};

export default Navbar;