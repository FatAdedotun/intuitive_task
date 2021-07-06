import React from "react";
import { PostContainer, PostWrapper, PostHeader, HeaderBreakerA, HeaderBreakerB, PostBody } from "./PostContentElements";

const PostContent = ({ posts }) => {
  return (
    <PostContainer>
      {posts.map(({ id, title, body, userId }) =>
        <PostWrapper key={id}>
          <PostHeader>
            <HeaderBreakerA>
              <h1>{title}</h1>
            </HeaderBreakerA>
            <HeaderBreakerB>
              <p>written by</p>
              <p>{userId}</p>
            </HeaderBreakerB>
          </PostHeader>

          <PostBody>
            <p>{body}</p>
          </PostBody>
        </PostWrapper>

        // <PostWrapper>
        //   <PostHeader>
        //       <p>{name}</p>
        //       <p>{email}</p>
        //   </PostHeader>

        //   <PostBody>
        //     <p>{body}</p>
        //   </PostBody>
        // </PostWrapper>
      )}
    </PostContainer>
  );
};

export default PostContent;