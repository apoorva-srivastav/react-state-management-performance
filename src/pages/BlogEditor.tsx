import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme, Box } from "@mui/material";
import { BlogContext } from "../context/BlogContext";
import { purple } from "@mui/material/colors";
import Blog from "../components/Blogs/Blog";

function BlogEditor() {
  //console.log("BlogEditor.render");

  const { id: _id } = useParams();
  const id = _id ? Number.parseInt(_id) : undefined;

  const theme = useTheme();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://live.staticflickr.com/3792/9722349899_d5c406a96c_b.jpg"
  );

  const { blogs, editBlog, addBlog, deleteBlog } = useContext(BlogContext);

  useEffect(() => {
    // If an ID is provided, fetch the corresponding blog details to display
    if (id) {
      const blog = blogs.filter((blog: any) => blog.id === id)[0];
      setTitle(blog.title);
      setContent(blog.content);
      setImageUrl(blog.imageUrl);
    }
  }, [id]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (id) {
      editBlog({ id, title, content, imageUrl });
    } else {
      const __id = blogs.length + 11;
      addBlog({ id: __id, title, content, imageUrl });
    }

    console.log("Blog processed. New list: ", blogs);
    navigate("/");
  };

  const updateTitle = (event: any) => setTitle(event.target.value);

  const updateContent = (event: any) => setContent(event.target.value);

  const updateImageUrl = (event: any) => setImageUrl(event.target.value);

  const onDelete = () => {
    deleteBlog(id);
    navigate("/");
  };

  const onChangeMethods = {
    updateTitle,
    updateContent,
    updateImageUrl,
    onDelete,
  };

  const formState = {
    title,
    imageUrl,
    content,
    id,
  };

  return (
    <Box display="flex" justifyContent="center">
      <div
        style={{
          background: "#121212",
          padding: theme.spacing(4),
          margin: theme.spacing(4),
          width: "75%",
        }}
      >
        <h1 style={{ color: purple[500] }}>
          {id ? "Tweak your Blog" : "Create a New Blog"}
        </h1>
        <Blog
          handleSubmit={handleSubmit}
          onChangeMethods={onChangeMethods}
          formState={formState}
          theme={theme}
        />
      </div>
    </Box>
  );
}

export default BlogEditor;