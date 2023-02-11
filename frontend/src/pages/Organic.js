import React, {useState} from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicsComponent from '../components/Topics/AdminTopicsComponent'
import { Button } from 'semantic-ui-react'

function Organic() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AuthLayout>
      <Button onClick={() => setIsAuth(!isAuth)}>admin</Button>
      <AdminTopicsComponent />
      {/* {isAuth ? <AdminComponent /> : <TopicsBodyComponent />} */}
    </AuthLayout>
  )
}

export default Organic