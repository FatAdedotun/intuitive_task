import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import PostContent from "./components/PostContent/PostContent";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(10);

  const getPosts = () => {
    const items = [ ...allPosts ]
    return items.splice(0, currentNumber)
  }

  const fetchMore = () => {
    const num = currentNumber + 10
    console.log('fetching more ....', num)
    setCurrentNumber(num)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setAllPosts(result.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  // set STATE for getComments?
  // do another useEffect axios for fetchComments?

  return (
    <div className="yo">
      <h1>Lorem Blog Posts</h1>
      {!isLoading && <PostContent posts={getPosts()} />}

      <button
      className="button" 
      onClick={fetchMore}>
        See More...
      </button>
    </div>
  );
};

export default App;