import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function TopicComponent(props) {
  return (
    <Image size='massive' src={props.image} />
  )
}

export default TopicComponent