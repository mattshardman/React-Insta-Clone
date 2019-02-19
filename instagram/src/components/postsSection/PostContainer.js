import React from 'react';
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

function PostContainer({ username, thumbnailUrl, imageUrl, likes, timestamp, comments }) {
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
                                className="far fa-heart" 
                                style={{ fontSize: 20, color: '#484848' }}>
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
    username: PT.string.isRequired, 
    thumbnailUrl: PT.string.isRequired, 
    imageUrl: PT.string.isRequired,
    likes: PT.number.isRequired,
    timestamp: PT.string.isRequired, 
    comments: PT.arrayOf(PT.object).isRequired,
}

export default PostContainer;
