// export const Header = (props) => {
//     return (
//         <header>
//             <h1>
//                 {props.title}  Task tracker
//             </h1>
//         </header> 
//     )
// }
// Header.defaultProps = {
//     title: "DOGGO"
// }
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    const onClick = ()=> {
        console.log('click');
    }

    return (
        <header className="header">
            {/* css in js for dynamics */}
            {/* <h1 style={headingStyle}> */}
            <h1>{title}</h1>
            <Button color="green" text="add" onClick={onClick} />
            
        </header> 
    )
}

export default Header;

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = { //lower case p..
    title : PropTypes.string.isRequired,
}

// // css in js
// const headingStyle = {
//     color:"red" }
