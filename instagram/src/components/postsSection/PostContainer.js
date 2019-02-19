import React, { useState } from 'react';
import moment from 'moment';
import PT from 'prop-types';
import CommentSection from './CommentSection';

import { 
    Wrapper, 
    Header, 
    Avatar, 
    ImageSection, 
    TextSection, 
    Likes, 
    Comments, 
    AddComments 
} from './postsStyles';

function PostContainer({ id, username, thumbnailUrl, imageUrl, likes, timestamp, comments, handleLike }) {
    const [thisUserLiked, setThisUserLiked ] = useState(false);

    return (
        <Wrapper>
            <Header>
                <Avatar thumbnailUrl={thumbnailUrl} />
                <p>{username}</p>
            </Header>

            <ImageSection imageUrl={imageUrl} />

            <TextSection>
                <Likes>
                    <div style={{ display: 'flex' }}>
                        <div style={{ paddingRight: 10 }}>
                            <i 
                                onClick={() => {
                                    handleLike(id, !thisUserLiked);
                                    setThisUserLiked(!thisUserLiked)
                                }}
                                className="far fa-heart" 
                                style={{ 
                                    fontSize: 20, 
                                    color: thisUserLiked ? '#DD2A7B' : '#484848' 
                                }}>
                            </i>
                        </div>
                        <div>
                            <i 
                                className="far fa-comment" 
                                style={{ fontSize: 20, color: '#484848' }}>
                            </i>
                        </div>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{likes} likes</div>      
                </Likes>

                <Comments>
                    { comments.map(comment => <CommentSection key={comment.text} {...comment} />) }
                    <small>{moment(timestamp).startOf('hour').fromNow()}</small>
                </Comments>

                <AddComments>
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        style={{ 
                            height: 30,
                            width: '75%',
                            border: 'none',
                            fontSize: 14,
                            outline: 'none'
                        }} 
                    />
                    <i/>
                </AddComments>
            </TextSection>
        </Wrapper>
    )
}

PostContainer.propTypes = {
    id: PT.string.isRequired,
    username: PT.string.isRequired, 
    thumbnailUrl: PT.string.isRequired, 
    imageUrl: PT.string.isRequired,
    likes: PT.number.isRequired,
    timestamp: PT.string.isRequired, 
    comments: PT.arrayOf(PT.object).isRequired,
    handleLike: PT.func.isRequired,
}

export default PostContainer;
