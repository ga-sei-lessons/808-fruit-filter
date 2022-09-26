import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const fruits = this.props.fruits.map((fruit, i) => {
            return <li key={`fruit${i}`}>{fruit}</li>
        })

        const removedFruits = this.props.filteredFruits.map((fruit, i) => {
            return <li key={`removedfruit${i}`}>{fruit}</li>
        })
        return (

            <div>
                <h2>filtered fruits:</h2>
                
                <ul>
                    {/* the list will go here */}
                    {fruits}
                </ul>

                <h2>fruits that where removed:</h2>

                <ul>
                    {/* list of removed fruits */}
                    {removedFruits}
                </ul>

            </div>
        )
    }
}