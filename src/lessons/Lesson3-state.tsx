import * as React from 'react'

/**
 * One might be led to wonder: If we can declare components as simple,
 * pure functions, why would we go through the additional boilerplate of
 * creating a class containing a 'render' method? And the truth is harsh
 * as life: Very few components we render are going to be *actually* pure.
 * 
 * For instance, some components might need to hold some internal state.
 * That's when class components come to the rescue. Note that we can
 * provide the type definition for a component's state by passing it
 * as the second type parameter for a component definition. This makes
 * it mandatory to specify the props type, and if we don't actually need
 * props we can just pass the {} type directly. See the example below:
 */

type CounterState = {
  value: number;
}

class Counter extends React.Component<{}, CounterState> {
  state = {
    value: 0
  }

  incrementState = () => {
    this.setState((state) => ({
      value: state.value + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>The current value from state is {this.state.value}</h1>
        <button onClick={this.incrementState}>
          Increment!
        </button>
      </div>
    )
  }
}

/**
 * With this we can do more complex components, like form validation.
 * One noteworthy detail about the 'setState' method of a component is
 * that it takes a function as an argument. It receives the current state value
 * and must return a value that will be merged into the current state. 
 */

export const Lesson3: React.FC = () => (
  <Counter />
)