import React from 'react'
import { Document } from 'react-pdf'
import alkeni from '../assets/ALKENI.pdf'

function TopicsComponent() {
  return (
    <div>
      <Document file={alkeni} />
    </div>
  )
}

export default TopicsComponent