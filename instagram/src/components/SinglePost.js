import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../dummy-data';
import withAuth from '../auth/authenticate';
import PostContainer from './postsSection/PostContainer';

import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #fafafa;
`;

const Back = styled.a`
    height: 20px;
    width: 50px;
    position: absolute;
    top: 20px;
    left: 20px;
`;

function SinglePost({match}) {
    const [post, setPost] = useState(false);

    useEffect(() => {
        const specificPost = data.filter(each => each.id === match.params.id)[0];
        setPost(specificPost);
    }, []);

    if (post) {
        return (
            <Wrapper>
                <Link to="/">
                    <Back>
                        <i 
                            className="fas fa-arrow-left" 
                            style={{ color: '#484848' }} 
                        />
                    </Back>
                </Link>
                <PostContainer {...post} />
            </Wrapper>
        );
    }

    return (
        <div>loading</div>
    );
}

export default withAuth(SinglePost);