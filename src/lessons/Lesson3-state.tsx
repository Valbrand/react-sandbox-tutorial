import * as React from 'react'

/**
 * One might be led to wonder: If we can declare components as simple,
 * pure functions, why would we go through the additional boilerplate of
 * creating a class containing a 'render' method? And the truth is harsh
 * as life: Not all components we create are going to be *actually* pure.
 * 
 * For instance, some components might need to hold some internal state.
 * That's when class components come to the rescue. Note that we can
 * provide the type definition for a component's state by passing it
 * as the second type parameter for a component definition. This makes
 * it mandatory to specify the props type, and if we don't actually need
 * props we can just pass the {} type directly.
 * 
 * With this we can do more complex components, like form validation.
 * One noteworthy detail about the 'setState' method of a component is
 * that it takes a function as an argument. It receives the current state value
 * and must return a value that will be merged into the current state. 
 * 
 * See the example below:
 */

type ExampleState = {
  value: string;
}

class ComponentWithState extends React.Component<{}, ExampleState> {
  readonly state = {
    value: ''
  }

  updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    this.setState((state) => ({
      value: newValue
    }))
  }

  render() {
    return (
      <div>
        {!this.state.value ?
          <h1>Hello, anonymous...</h1> :
          <h1>Hello, {this.state.value}!</h1>}
        <input 
          type='text'
          value={this.state.value}
          onChange={this.updateValue}
        />
      </div>
    )
  }
}

/**
 * The example above has one very important detail: the event handler for
 * when the input value changes was declared as an arrow function instead
 * of just being a simple method. That's because of the way the value of 'this'
 * works in JavaScript (sigh...): if we had declared the 'updateValue' function
 * as a regular method, we wouldn't be able to call 'this.setState' from inside
 * its body when it gets called in the event handling flow.
 * 
 * The 3 lines above the input tag might seem a little scary, but it's just what
 * we said in lesson 1: it's just plain JS. We used a ternary operator to decide
 * what to render as the text for our component. Given the flexibility allowed by
 * being able to arbitrarily using JavaScript code inside JSX tags, we could have
 * done that example in many different ways. Fiddle around with it to see what's possible!
 */

export const Lesson3: React.FC = () => (
  <ComponentWithState />
)

/**
 * The exercise for this section is to write a very simple counter. It holds a number
 * in its state (initially zero), and when it renders, it shows the current value 
 * as text and a button that increments that number. 
 * It should also render something that should reset the counter value to zero.
 * 
 * How would you implement the exercise if you wanted to reset the value not to zero,
 * but based in the value of an input tag? You can look at the ComponentWithState above
 * to get inspired about that.
 * 
 * What about receiving the initial value as props instead of always starting from zero?
 * Tip: https://itnext.io/how-to-properly-define-state-in-react-components-47544eb4c15d
 */

type ExerciseState = {}

class Exercise extends React.Component<{}, ExerciseState> {
  // Write here!
}