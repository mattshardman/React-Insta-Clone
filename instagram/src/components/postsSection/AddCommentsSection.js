import React, { useState } from 'react';
import PT from 'prop-types';

import { 
    AddComments,
    CommentInput, 
} from './postsStyles';

function AddCommentsSection({id, handleAddComments}) {
    const [commentText, setComment] = useState('')
    return (
        <AddComments>
        <form 
            action="" 
            style={{ padding: 0, margin: 0, width: '100%' }}
            onSubmit={(e) => {
                handleAddComments(e, id, commentText);
                setComment("");
            }}
        >
            <CommentInput
                type="text" 
                placeholder="Add a comment..." 
                value={commentText}
                onChange={(e) => setComment(e.target.value)}
            />
        </form>
        <i/>
    </AddComments>
    );
}

AddCommentsSection.propTypes = {
    id: PT.string.isRequired,
    handleAddComments: PT.func.isRequired,
}

export default AddCommentsSection;