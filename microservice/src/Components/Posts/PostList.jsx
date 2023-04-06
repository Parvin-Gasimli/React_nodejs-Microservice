import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/UseFetcher";
import CommentCreate from "../Comments/CommentCreate";
import CommentsList from "../Comments/CommentList";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const FetchPost = () => {
    axios.get("http://localhost:4000/posts").then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    FetchPost();
  }, []);
  const renderedPosts = Object.values(posts).map((post, index) => {
    return (
      <div key={index} className="col-xl-4 g-3">
        <div className="card" style={{ marginBottom: "10px" }}>
          <div className="card-body">
            <h5>{post.title}</h5>
            <CommentCreate postId={post.id} />
            <CommentsList postId={post.id} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {renderedPosts}
        </div>
      </div>
    </div>
  );
};

export default PostList;
