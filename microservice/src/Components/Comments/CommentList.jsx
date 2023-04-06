import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/UseFetcher";
import CommentCreate from "../Comments/CommentCreate";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const FetchPost = () => {
    axios.get(`http://localhost:4001/posts/${postId}/comments`).then((res) => {
      setComments(res.data);
    });
  };
  useEffect(() => {
    FetchPost();
  }, []);
  const renderedPosts = Object.values(comments).map((comments, index) => {
    return (
      <div key={index} className="col-xl-12 g-3">
        <div className="card" style={{ marginBottom: "10px" }}>
          <div className="card-body">
            <span>{comments.content}</span>
            {/* <CommentCreate postId={comments.id} /> */}
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

export default CommentsList;
