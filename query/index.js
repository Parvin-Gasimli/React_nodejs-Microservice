const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};
posts ===
  {
    d8f9: {
      id: "d8f9",
      title: "Post Title",
      comments: [
        {
          id: "a1b2",
          content: "Comment Content",
          status: "approved",
        },
      ],
    },
    "2f3a": {
      id: "2f3a",
      title: "Post Title",
      comments: [
        {
          id: "a1b2",
          content: "Comment Content",
          status: "approved",
        },
      ],
    },
    "3f4a": {
      id: "3f4a",
      title: "Post Title",
      comments: [
        {
          id: "a1b2",
          content: "Comment Content",
          status: "approved",
        },
      ],
    },
  };

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  res.send({});
});

app.listen(4002, () => {
  console.log("Query Listening on 4002");
});
