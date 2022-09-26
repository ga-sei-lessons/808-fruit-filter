import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class FruitContainer extends Component {
    // shared state stored here
    state = {
        // array of fruits to display
        fruitsToDisplay: this.props.fruits,
        // value that has been typed into the input
        filterValue: ''
    }

    handleFilterChange = (e) => {
        // set state to controlle the input
        this.setState({
            filterValue: e.target.value
        })
    }

    // methods to manipulate state defined here
    render() {
        return (
            <>
                <h1>I am the fruit container</h1>

                {/* give input the methods to manipulate state */}
                <Input 
                    value={this.state.filterValue}
                    handleFilterChange={this.handleFilterChange}
                />

                {/* give list the state to display */}
                <List fruits={this.state.fruitsToDisplay} />
            </>
        )
    }
}