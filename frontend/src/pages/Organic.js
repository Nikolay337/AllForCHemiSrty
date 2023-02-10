import React, {useState} from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminComponent from '../components/AdminComponent'
import { Button } from 'semantic-ui-react'

function Organic() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AuthLayout>
      <Button onClick={() => setIsAuth(!isAuth)}>admin</Button>
      <AdminComponent />
      {/* {isAuth ? <AdminComponent /> : <TopicsBodyComponent />} */}
    </AuthLayout>
  )
}

export default Organic