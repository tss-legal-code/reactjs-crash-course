import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    // const onClick = (event) => {
    //     console.log(event);
    // } 

    return (
        <button 
            onClick={onClick}
            className="btn" 
            style={{backgroundColor: color}}
        >
            {text}
        </button>
    )
}

export default Button

Button.defaultProps = {
    color: "steelBlack",
}

Button.propTypes = {
    color : PropTypes.string,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
}
