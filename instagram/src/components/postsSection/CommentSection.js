import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const Comments = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 0;
    box-sizing: border-box;
`;

function CommentSection({ username, text }) {
    return (
        <Comments>
            <p style={{ margin: 0, textAlign: 'left' }}>
                <strong>{username}</strong>
                &nbsp;{text}
            </p> 
        </Comments>
    );
}

CommentSection.propTypes = {
    username: PT.string.isRequired,
    text: PT.string.isRequired,
}

export default CommentSection;