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

export const Header = ({title}) => {
    return (
        <header className="header">
            {/* css in js for dynamics */}
            {/* <h1 style={headingStyle}> */}
            <h1>{title}</h1>
            <Button color="green" text="add" />
            
        </header> 
    )
}

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// // css in js
// const headingStyle = {
//     color:"red" }
