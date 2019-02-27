import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as lessons from './lessons/lessons'

/**
 * When you start a lesson, change the call to the 'render' fucntion below
 * to use the corresponding lesson. That means that when you're starting Lesson 2,
 * you should change the first argument below to <lessons.Lesson2 />.
 * Inside the code for each lesson, you'll find comments about the subject
 * of each lesson.
 * 
 * P.S.: For now, just ignore how weird it may seem to render a tag called
 * 'lessons.Lesson1', but keep in mind that it's possible.
 */

ReactDOM.render(
    <lessons.Lesson1 />,
    document.getElementById('root'),
)