import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Menu, Icon } from 'semantic-ui-react'

function Navbar() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.clear();
    navigate('/home')
  }

  return (
    <Menu inverted secondary style={{backgroundColor: 'Indigo', marginBottom: 0}}>
      <Menu.Item position='left' style={{fontSize: '2.5rem', padding: '2rem', fontWeight: 'bold'}} onClick={() => navigate('/home')}>
        <span style={{color: 'white'}}>Al</span>
        <span style={{color: 'white'}}>l</span>
        <span style={{color: 'white'}}>F</span>
        <span style={{color: 'white'}}>o</span>
        <span style={{color: 'white'}}>r</span>
        <span style={{color: '#00ff0d'}}>C</span>
        <span style={{color: '#00ff0d'}}>H</span>
        <span style={{color: '#ff0090'}}>e</span>
        <span style={{color: '#f538d2'}}>m</span>
        <span style={{color: '#00ffd5'}}>i</span>
        <span style={{color: '#00ff0d'}}>S</span>
        <span style={{color: '#00ffd5'}}>t</span>
        <span style={{color:'#ff0090'}}>r</span>
        <span style={{color: '#f538d2'}}>y</span>
      </Menu.Item>
      <Menu.Item style={{color: 'white', fontSize: '2rem', padding: '2rem', fontWeight: 'bold'}}
        onClick={() => navigate('/periodic-table')}>Периодична система
      </Menu.Item>
      {!user ? (
        <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
          <Button color='purple' onClick={() => navigate('/')}>
            Вход
          </Button>
          <Button color='green' style={{marginLeft: '2rem'}}
            onClick={() => navigate('/register')}>Регистрация
          </Button>
        </Menu.Item>
      ) : (
        <Menu.Item position='right' style={{fontWeight: 'bold'}}>
          <div style={{fontSize: '2rem'}}>{user.name}</div>
          <Button color='green' size='massive' style={{marginLeft: '1rem'}} onClick={logout}>
            <Icon name='sign-out' />
          </Button>
        </Menu.Item>
      )}
    </Menu>
  )
}

export default Navbar;