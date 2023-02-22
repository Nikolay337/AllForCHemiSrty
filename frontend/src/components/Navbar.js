import React, {useEffect, useState} from 'react'
import { Button, Menu } from 'semantic-ui-react'
import jwt_decode from 'jwt-decode';

function Navbar() {

  const token = localStorage.getItem('token');

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwt_decode(token);
      const userId = decoded.id;
      fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data.name))
        .catch(err => console.log(err));
    }
 }, []);
  
 const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Menu inverted secondary color='purple'>
      <Menu.Header position='left' href='/' style={{color: 'white', textAlign: 'center', fontSize: '2rem', padding: '2rem', fontWeight: 'bold'}}>
        AllForCHemiStry
      </Menu.Header>
      {token ? (
        <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
          <Button color='purple'>
           {user}
          </Button>
          <Button color='red' onClick={handleLogout}>
           Излез
          </Button>
        </Menu.Item>
      ) : (
        <Menu.Item position='right' style={{padding: '2rem', fontSize: '1.25rem'}}>
          <Button color='purple' href='/login'>
            Вход  
          </Button>
          <Button color='green' href='/register'>
            Регистрация
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;