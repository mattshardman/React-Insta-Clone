import React from 'react';
import PT from 'prop-types';

const styles = { 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '5px 0',
    boxSizing: 'border-box' 
};

function CommentSection({username, text}) {
    return (
        <div style={styles}>
            <p style={{ margin: 0, textAlign: 'left' }}><strong>{username}</strong>&nbsp;{text}</p> 
        </div>
    );
}

CommentSection.propTypes = {
    username: PT.string.isRequired,
    text: PT.string.isRequired,
}

export default CommentSection;