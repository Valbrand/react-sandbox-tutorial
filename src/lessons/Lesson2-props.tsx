import * as React from "react";

/**
 * Components can receive data as input to their render function.
 * We call this data a component's props (shorthand for 'properties'), and
 * when using TypeScript we can specify the expected type of props in the
 * type parameters of the React.FC type.
 * 
 * In a function component, the props are received as the first argument
 * of the function that defines it, as it can be seen below:
 */

type ExampleProps = {
  a: number;
  b: number;
}

const FunctionComponentWithProps: React.FC<ExampleProps> = (props) => (
  <h1>Function component: {props.a} + {props.b} = {props.a + props.b}!</h1>
)

/**
 * For class components, the props are available as a property of the component
 * instance being rendered. That means we can access its props inside the render
 * function by using 'this.props', as seen below:
 */

class ClassComponentWithProps extends React.Component<ExampleProps> {
  render() {
    return (
      <h1>Class component: {this.props.a} + {this.props.b} = {this.props.a + this.props.b}!</h1>
    )
  }
}

/**
 * Accessing the props like in the examples above gets very verbose 
 * and tiresome quickly. 
 * 
 * We can access this data by destructuring it like below (it's important
 * to note that we don't lose type information as we declared the props' type
 * in the component declaration):
 */

const ShorterFunctionComponentWithProps: React.FC<ExampleProps> =
  ({ a, b }) => (
    <h1>Shorter function component: {a} + {b} = {a + b}!</h1>
  )

class ShorterClassComponentWithProps extends React.Component<ExampleProps> {
  render() {
    const { a, b } = this.props

    return (
      <h1>Shorter class component: {a} + {b} = {a + b}!</h1>
    )
  }
}

/**
 * In order to compose our components, we will eventually need to nest them
 * inside other components. When we put one element inside another like this:
 * 
 * <a> <b /> </a>
 * 
 * We can say the element b is a child of the element a. But how do we actually
 * allow for arbitrary children inside our components? Good news: it's just
 * another prop! Check the example below.
 * 
 * An important observation is that we didn't need to specify
 * 'children' as one of the expected props for the 'StylishText' component. 
 * Potentially, any React component might receive props, so the 
 * type declaration for the React.FC type automatically 
 * considers an optional 'children' prop by using an intersection type
 *
 * More on intersection types can be found at:
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */

const StylishText: React.FC = ({ children }) => (
  <p style={{ border: '1px solid purple', padding: '10px' }}>
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

/**
 * We've declared props that components EXPECT, but we haven't actually
 * seen what good are they for. In order to pass props to a rendering
 * component, we use a notation that's very similar to passing tags in HTML.
 * 
 * It's important to note that we need the curly brackets to pass numbers
 * to a component, as it's a JS value. Remember the empty maps in last lesson's
 * 'React.createElement' examples? That's the props map being passed to the component.
 * The way to do it in that notation is as follows:
 * 
 * React.createElement(FunctionComponentWithProps, {a: 2, b: 3}, [])
 * 
 * Remember to try out the other components shown in this lesson, and feel free
 * to fiddle with them. If you have a question about whether something can be done,
 * try it out and see it for yourself! Of course, that's not to say you shouldn't 
 * ask for help. You can totally do that too.
 */

export const Lesson2: React.FC = () => (
  <FunctionComponentWithProps a={2} b={3} />
)

/**
 * As an exercise, write a component below that receives someone's first and last
 * names, and renders that person's full name. Note that when passing strings
 * as props to a component, you don't need to use curly brackets 
 * (but you still need to use quotes).
 */

type ExerciseProps = {
  // Add the prop types here
}

const ExerciseComponent: React.FC<ExerciseProps> =
  (props) => (
    <h1>Write here!</h1>
  )