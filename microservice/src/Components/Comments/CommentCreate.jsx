import React, { useState } from "react";
import axios from "axios";
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const OnSubmoitForm = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <button className="btn btn-success">Create Post</button>
            <form onSubmit={OnSubmoitForm}>
              <div className="form-groups">
                <label htmlFor="Name">Name</label>
                <input
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  className="py-2 w-100 b-3"
                  type="text"
                  placeholder="Enter"
                />
              </div>
              <button className="btn btn-primary py-2 my-2 w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCreate;
