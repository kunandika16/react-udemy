import React from "react";
import PropTypes from 'prop-types'
class Button extends React.Component {
   
    render() {
        return (
            <div>

                <button onClick={this.change}> click </button>
            </div>
        )

    }
}

Button.propTypes = {
    color: PropTypes.string
}

Button.defaultProps = {
    color: "biru"
}

export default Button;