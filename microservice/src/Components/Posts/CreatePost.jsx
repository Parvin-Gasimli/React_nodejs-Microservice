import React, { useState } from "react";
import axios from "axios";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const OnSubmoitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6">
            <h1>Create Post</h1>

            <form onSubmit={OnSubmoitForm}>
              <div className="form-groups">
                <label htmlFor="Name">Name</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
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

export default CreatePost;
