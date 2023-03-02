import React, {useState} from 'react'
import AuthLayout from '../layout/AuthLayout'
import TopicComponent from '../components/TopicComponent'
import HighlightTopicComponent from '../components/HighlightTopicComponent'
import { Checkbox } from 'semantic-ui-react'

function Topic() {
  
  const [checked, setChecked] = useState(false);
  const handleChange = (e,data) => setChecked(data.checked);

  return (
    <AuthLayout>
      <Checkbox toggle checked={checked} onChange={handleChange} />
      {checked ? <HighlightTopicComponent /> : <TopicComponent />}
    </AuthLayout>
  )
}

export default Topic