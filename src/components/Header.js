//import React from 'react'... don't need this anymore in newer versions
import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

/* //CSS in JS example
const headingSyle = {
    color: 'red',
    backgroundColor: 'black',
} */

export default Header
