import React from "react";

class List extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.book}</h1>
                <h1> {this.props.author}</h1>
            </div>
        )
    }
}

export default List