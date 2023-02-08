import React from 'react'
import { Document, Page } from 'react-pdf'
import alkeni from '../assets/topics-pdf/alkini.pdf'

function TopicsComponent() {
  return (
    <Document file={alkeni}>
      <Page size="A4">

      </Page>
    </Document>
  )
}

export default TopicsComponent