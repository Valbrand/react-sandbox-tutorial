import * as React from "react";

/**
 * React is a UI library that focuses on organizing an interface in
 * well-defined components, each with its own responsibility. There
 * are two ways of defining components, as shown below.
 *
 * The first way is called a Function Component (or FCs). 
 * Function components were called Stateless Functional Components 
 * (or SFCs) in the past, so don't freak out if you see one of those in the wild.
 * Function components are very simple, as they are just functions
 * that return a React element (more on that below).
 */

const FunctionComponent: React.FC = () => (
  <h1>I'm a very simple function component.</h1>
);

/*
 * The second way (which actually was around before SFCs) is called
 * a class component. As its name implies, it's a class that
 * has a render function
 */

class ClassComponent extends React.Component {
  render() {
    return <h1>I'm a very simple class component.</h1>;
  }
}

/**
 * JSX is just syntax sugar for react's internals, so we could have written
 * FunctionComponent and ClassComponent as shown below (For now, ignore the
 * empty map that is passed as the second argument to the createElement function):
 */

const WeirdFunctionComponent: React.FC = () => (
  React.createElement('h1', {}, ["I'm a (not so) simple function component"])
)

class WeirdClassComponent extends React.Component {
  render() {
    return React.createElement('h1', {}, ["I'm a (not so) simple class component"])
  }
}

/**
 * Another important thing to note about JSX is that you can embed arbitrary
 * JS code inside it. To do it in JSX, we just have to wrap the code in curly
 * brackets ('{}'). Just for the sake of the example, we're showing what's
 * equivalent code in the createElement notation too (although we won't 
 * be using it anymore in the future)
 */

const ComponentWithCode: React.FC = () => (
  <h1>1 + 1 = {1 + 1}!</h1>
)

const ComponentWithCodeAndCreateElement: React.FC = () => (
  React.createElement('h1', {}, ['1 + 1 = ', 1 + 1, '!'])
)

/**
 * In order to render that component, one just needs to use it as a tag,
 * as shown below. Note that when you're using a component, it doesn't really
 * matter whether a component is functional or class-based. React's internals
 * take care of rendering stuff appropriately.
 * 
 * You can go ahead and change 'FunctionComponent' below 
 * to 'ClassComponent' (or any other component we defined in this file). 
 * Then, check that the right components were rendered appropriately.
 */

export const Lesson1 = () => <FunctionComponent />;

/**
 * As an exercise, write a component below that renders the current timestamp.
 * You can create a date object reflecting the current moment with the function
 * Date.now(). Try rewriting it as a class component. It's a kind of silly exercise,
 * but practice is the only thing that makes our brains internalize stuff so ¯\_(ツ)_/¯
 */

const ExerciseComponent: React.FC = () => (
  <h1>Write here!</h1>
)
