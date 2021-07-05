import React from "react";
import { PostContainer, PostHeader, PostBody } from "./PostContentElements";

const PostContent = () => {
  console.log();

  return (
    <PostContainer>
      <PostHeader>
        <h1>title</h1>
        <p>written by</p>
        <p>userId</p>
      </PostHeader>

      <PostBody>
        <p>body</p>
      </PostBody>
    </PostContainer>
  );
};

export default PostContent;
