import React, { Component } from 'react'
class Main extends Component {
    render() {
        return (
            <div class="blockMain">
                {this.props.children}
            </div>
        )
    }
}

export default Main;