import axios from "axios";
import React, { useState } from "react";
import { PostContainer, PostWrapper, PostHeader, HeaderBreakerA, HeaderBreakerB, PostBody, Comments } from "./PostContentElements";

const PostContent = ({ posts }) => {
  const [comments, setComments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  
  const getComments = (id) => {
    if (selectedId != null) {
      return setSelectedId[null];
    }
    setSelectedId(id);
    axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments/${id}`).then(response => {
      setComments(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  };

  return (
    <PostContainer>
      {posts.map(({ id, title, body, userId }) =>
        <PostWrapper onClick={getComments(id)} key={id}>
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
      )}

      {selectedId === id && <Comments />}
    </PostContainer>
  );
};

export default PostContent;