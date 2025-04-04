import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";  // ✅ Ensure the path is correct

const MessagesList = ({ messages = [] }) => (
    <section id="messages-list">
        <ul>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
);

MessagesList.propTypes = {  // ✅ Fixed (lowercase 'p' in 'propTypes')
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default MessagesList;
