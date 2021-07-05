import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import PostContent from "./components/PostContent/PostContent";

const App = () => {
  const [posts, setPosts] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/1`
      );

      console.log(result.data);

      setPosts(result.data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="yo">
      <h1>POST</h1>
      <PostContent isLoading={isLoading} posts={posts} />
    </div>
  );
};

export default App;
