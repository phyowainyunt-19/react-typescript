import React, { Component } from 'react'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

/* Count value is 5 */
export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button> <br />
                {this.props.message} &nbsp; {this.state.count}
            </div>
        )
    }
}

export default Counter