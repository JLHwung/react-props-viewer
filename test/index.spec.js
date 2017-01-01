import { test } from 'tap'
import React from 'react'
import { shallow } from 'enzyme'
import JSONTree from 'react-json-tree'

import PropsViewer from '../src'

test('props-viewer should generate a component', (t) => {
  const Robot = PropsViewer('Robot')

  t.equal(typeof Robot, 'function')
  t.equal(Robot.length, 1)
  t.equal(Robot.displayName, 'Robot')
  t.end()
})

test('shallow', (t) => {
  const Robot = PropsViewer('Robot')
  const props = {
    ava: 43
  }

  const wrapper = shallow(<Robot {...props} />)

  t.equal(wrapper.contains(<span>Robot</span>), true)
  t.equal(wrapper.contains(<JSONTree data={props} />), true)
  t.end()
})
