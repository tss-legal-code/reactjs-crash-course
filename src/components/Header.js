import {useLocation} from "react-router-dom";
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>

            {location.pathname === "/" && 
                <Button
                    color={showAdd ? "red" : "green"} 
                    text={showAdd ? "Collapse" : "Expand"} 
                    onClick={onAdd} 
                />}  
                 
        </header> 
    )
}



Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header;