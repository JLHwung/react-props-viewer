import { test } from 'tap'
import React from 'react'
import { shallow } from 'enzyme'
import JSONTree from 'react-json-tree'

import PropsViewer from '../src'

test('props-viewer should generate a component', (t) => {
  const Robot = PropsViewer('Robot')

  t.plan(3)
  t.ok(typeof Robot, 'function')
  t.ok(Robot.length, 1)
  t.ok(Robot.displayName, 'Robot')
})

test('shallow', (t) => {
  const Robot = PropsViewer('Robot')
  const props = {
    ava: 43
  }

  const wrapper = shallow(<Robot {...props} />)

  t.plan(2)
  t.ok(wrapper.contains(<span>Robot</span>), true)
  t.ok(wrapper.contains(<JSONTree data={props} />), true)
})
