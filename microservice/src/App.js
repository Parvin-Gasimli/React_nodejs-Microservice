import React from "react";
import CreatePost from "./Components/Posts/CreatePost";
import PostList from "./Components/Posts/PostList";

const App = () => {
  return (
    <div>
      <CreatePost />
      <br />
      <PostList />
    </div>
  );
};

export default App;
