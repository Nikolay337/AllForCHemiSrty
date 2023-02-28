import React, {useState} from 'react'
import AuthLayout from './layout/AuthLayout'
import AdminTopicComponent from '../components/Topic/AdminTopicComponent'
import AdminHighlightTopicComponent from '../components/HighlightTopic/AdminHighlightTopicComponent'
import { Checkbox } from 'semantic-ui-react'

function Topic() {
  
  const [checked, setChecked] = useState(false);
  const handleChange = (e,data) => setChecked(data.checked);

  return (
    <AuthLayout>
      <Checkbox toggle checked={checked} onChange={handleChange} />
      {checked ? <AdminHighlightTopicComponent /> : <AdminTopicComponent />}
    </AuthLayout>
  )
}

export default Topic