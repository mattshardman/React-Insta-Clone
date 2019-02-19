import React from 'react';
import moment from 'moment';
import PT from 'prop-types';
import CommentSection from './CommentSection';

const styleMaker = (thumbnailUrl, imageUrl) => ({
    wrapper: { 
        width: 500, 
        maxWidth: '100%',
        border: '1px #eaeaea solid',
        borderRadius: 3, 
        boxSizing: 'border-box', 
        margin: '10px 0',
        background: '#fff'
    },
    header: { 
        height: 50, 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eaeaea',
        paddingLeft: 20,
        boxSizing: 'border-box',
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: '50%',
        background: 'black',
        marginRight: 10,
        backgroundImage: `url("${thumbnailUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    imageSection: {
        width: '100%',
        height: 350,
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    textSection: {
        width: '100%',
        borderTop: '1px solid #eaeaea'
    },
    likesSection: {
        width: '100%',
        height: 55,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingLeft: 20, 
        paddingTop: 10
    },
    commentSection: { 
        width: '100%', 
        padding: '5px 20px', 
        boxSizing: 'border-box', 
        textAlign: 'left'  
    },
    addCommentSection: { 
        width: 'calc(100% - 40px)',
        borderTop: '1px #eaeaea solid', 
        boxSizing: 'border-box',
        height: 50, 
        display: 'flex',
        alignItems: 'center',
        margin: '10px 20px',
    }
});

function PostContainer({ username, thumbnailUrl, imageUrl, likes, timestamp, comments }) {
    const styles = styleMaker(thumbnailUrl, imageUrl);
    const { 
        wrapper, 
        header, 
        avatar, 
        imageSection, 
        textSection, 
        likesSection,
        commentSection, 
        addCommentSection 
    } = styles;

    return (
        <div style={wrapper}>
            <div style={header}>
                <div style={avatar}></div>
                <p>{username}</p>
            </div>
            <div style={imageSection}>

            </div>
            <div style={textSection}>
                <div style={likesSection}>
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
                    
                </div>
                <div style={commentSection}>
                    { comments.map(comment => <CommentSection key={comment.text} {...comment} />) }
                    <small>{moment(timestamp).startOf('hour').fromNow()}</small>
                </div>
                <div style={addCommentSection}>
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
                    <i ></i>
                </div>
            </div>
        </div>
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