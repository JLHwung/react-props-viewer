# react-props-viewer
[![npm version](https://img.shields.io/npm/v/react-props-viewer.svg?style=flat-square)](https://www.npmjs.com/package/react-props-viewer)
[![Build Status](https://img.shields.io/travis/JLHwung/react-props-viewer.svg?style=flat-square)](https://travis-ci.org/JLHwung/react-props-viewer)
[![Coverage Status](https://img.shields.io/coveralls/JLHwung/react-props-viewer.svg?style=flat-square)](https://coveralls.io/github/JLHwung/react-props-viewer)
[![Dependencies Status](https://img.shields.io/david/JLHwung/react-props-viewer.svg?style=flat-square)](https://david-dm.org/JLHwung/react-props-viewer)
[![Dev Dependencies Status](https://img.shields.io/david/dev/JLHwung/react-props-viewer.svg?style=flat-square)](https://david-dm.org/JLHwung/react-props-viewer?type=dev)

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
render(<TodoComponent {...props} />, document.getElementById('main'))
```

## screenshot
<img width="352" alt="screenshot" src="https://cloud.githubusercontent.com/assets/3607926/21523879/dde11a38-cd4c-11e6-97c3-0548fe879114.png">
