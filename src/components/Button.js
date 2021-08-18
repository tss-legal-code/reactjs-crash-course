import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className="btn fixed-size-btn" 
            style={{backgroundColor: color}}
        >
            {text}
        </button>
    )
}



Button.defaultProps = {
    color: "steelBlack",
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
}

export default Button