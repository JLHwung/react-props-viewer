import React from 'react'
import JSONTree from 'react-json-tree'

const propsViewer = (name) => {
  if (typeof name !== 'string') {
    throw new Error('expected name to be a string')
  }
  const component = (props) => (
    <div>
      <span>{name}</span>
      <br />
      <JSONTree data={props} />
    </div>
  )
  component.displayName = name
  return component
}

export default propsViewer
