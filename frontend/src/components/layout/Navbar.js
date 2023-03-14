import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Menu, Icon } from 'semantic-ui-react'

function Navbar() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function Logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/home')
  }

  return (
    <Menu inverted secondary style={{backgroundColor: 'Indigo', marginBottom: 0}}>
      <Menu.Item position='left' onClick={() => navigate('/home')} style={{color: 'white', fontSize: '2.5rem', padding: '2rem', fontWeight: 'bold'}}>
        AllForCHemiStry
      </Menu.Item>
      <Menu.Item  onClick={() => navigate('/periodic-table')} style={{color: 'white', fontSize: '2rem', padding: '2rem', fontWeight: 'bold'}}>
        Периодична система
      </Menu.Item>
      {!user ? 
        <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
          <Button color='purple' onClick={() => navigate('/')}>
            Вход  
          </Button>
          <Button color='green' style={{marginLeft: '2rem'}} onClick={() => navigate('/register')}>
            Регистрация
          </Button>
        </Menu.Item>
      :
        <Menu.Item position='right' style={{fontWeight: 'bold'}}>
          <div style={{fontSize: '2rem'}}>{user.name}</div> 
          <Button color='green' size='massive' style={{marginLeft: '1rem'}} onClick={Logout}>
            <Icon name='sign-out' />
          </Button>
        </Menu.Item>
      }
    </Menu>
  )
}

export default Navbar;