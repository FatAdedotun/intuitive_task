import styled from "styled-components";

export const PostContainer = styled.div` 
  display: flex;
  flex-direction: column;
`;

export const PostWrapper = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 1rem 0rem;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 2rem;
`;

export const HeaderBreakerA = styled.div`
  justify-content: start;
  
  h1 {
    font-size: 1rem;
    font-weight: 900;
    width: 100%;
  }
`;

export const HeaderBreakerB = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;
  
  p {
    font-size: 12px;
    padding: 10px;
    background: #F2F7F8;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    font-weight: 500;
  }
`;

export const PostBody = styled.div`
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  
  p {
    width: 85%;
    text-align: justify;
    padding-bottom: 20px;
  }
`;

export const CommentsWrapper = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 1rem 0rem;
  margin-left: 2.5rem;
  padding: 1rem 1rem;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-weight: 600;
    margin-right: 5px;
  }
`;

export const CommentsBottom = styled.div`
  p {
    /* text-align: justify; */
  }
`;