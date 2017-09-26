import { test } from 'tap'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import JSONTree from 'react-json-tree'

import PropsViewer from '../src'

Enzyme.configure({ adapter: new Adapter() })

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

test('props-viewer should throw when name is not a string', (t) => {
  t.throws(() => PropsViewer(), 'expected name to be a string')
  t.throws(() => PropsViewer(43), 'expected name to be a string')
  t.end()
})
