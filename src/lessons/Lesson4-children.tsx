import * as React from 'react'

/**
* Up until now, our components were extremely simple, returning just a 
* single element upon rendering. In order to build more complex interfaces,
* we must be able to build more complex components, mixing and matching
* other, simpler components. As one can expect from a HTML background, 
* we can do the following:
*/

const ComponentWithNestedElements: React.FC = () => (
  <div>
    <h1>Lesson 3</h1>
    <p>
      This is a paragraph with emphasis on <em>part of it</em>
    </p>
  </div>
)

/**
* Just like we can do with HTML tags, we can do the same with our own
* custom components. Note that the contents passed between the opening
* and closing tags of the component are treated inside the inner
* component just like another prop called 'children'.
*
* Another important observation is that we didn't need to specify
* 'children' as one of the expected props. That's because potentially,
* any React component might receive props, so the type declaration for
* the React.FC type automatically considers an optional children prop
* by using an intersection type
*
* More on intersection types can be found at:
* https://www.typescriptlang.org/docs/handbook/advanced-types.html
*/

const StylishText: React.FC = ({ children }) => (
  <p style={{ textDecoration: 'line-through' }}>
    {children}
  </p>
)

const ComponentUsingStylishText: React.FC = () => (
  <div>
    <h1>Below's some stylish text</h1>
    <StylishText>
      Yeah...
    </StylishText>
  </div>
)

export const Lesson4: React.FC = () => (
  <ComponentUsingStylishText />
)