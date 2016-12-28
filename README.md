# react-props-viewer
[![Build Status](https://travis-ci.org/JLHwung/react-props-viewer.svg?branch=master)](https://travis-ci.org/JLHwung/react-props-viewer)

## usage
```javascript
import React from 'react'
import { render } from 'react-dom'
import PropsViewer from 'react-props-viewer'

const TodoComponent = PropsViewer('TodoComponent')

const props = {
    count: 43,
    todos: [{
        id: '1',
        text: 'brunch'
    }, {
        id: '2',
        text: 'grocery'
    }]
}
render(<TodoComponent {...props} />, document.getElementById('#main'))
```
