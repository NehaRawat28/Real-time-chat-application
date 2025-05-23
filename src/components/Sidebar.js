import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ users }) => (
    <aside id = "sidebar" className="sidebar">
    <ul>
    {users.map(user => (
        <li key={user.id}>{user.name}</li>
    ))}

        </ul>
        </aside>
)
Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequird,
        }).isRequired
    ).isRequired
}

export default Sidebar
