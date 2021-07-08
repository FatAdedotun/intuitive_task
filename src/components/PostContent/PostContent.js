import axios from "axios";
import React, { useState } from "react";
import { PostContainer, PostWrapper, PostHeader, 
  HeaderBreakerA, HeaderBreakerB, PostBody, 
  CommentsWrapper, CommentsHeader, CommentsBottom } from "./PostContentElements";

const PostContent = ({ posts }) => {
  const [comments, setComments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  
  const getComments = (id) => {
    console.log('is is true')
    if (selectedId != null) {
      return setSelectedId(null);
    }
    setSelectedId(id);
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`).then(response => {
      setComments(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error.message);
    })
  };

  const Comments = () => {
    return (
      <div>
       {comments.map(({ name, email, body }) => 
       <CommentsWrapper>
         <CommentsHeader>
          <p>{name}</p>
          <p>.</p>
          <p>{email}</p>
         </CommentsHeader>
         <CommentsBottom>
          <p>{body}</p>
         </CommentsBottom>
       </CommentsWrapper>
       )}
      </div>
    )
  }

  return (
    <PostContainer>
      {posts.map(({ id, title, body, userId }) =>
        <div>
          <PostWrapper onClick={function(){getComments(id)}} key={id}>
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
          {selectedId === id && <Comments />}
        </div>
    )}
    </PostContainer>
  );
};

export default PostContent;