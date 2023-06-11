import { TextField } from "@mui/material";
import { ColorButton, ColorIconButton } from "../Common/CustomButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const Blog = ({ onChangeMethods, handleSubmit, formState, theme }: any) => {
  //console.log("Blog.render");

  const { updateTitle, updateContent, updateImageUrl, onDelete } =
    onChangeMethods;
  const { title, imageUrl, content, id } = formState;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        fullWidth
        onChange={updateTitle}
        margin="normal"
      />
      <TextField
        label="Content"
        variant="outlined"
        value={content}
        onChange={updateContent}
        multiline
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image"
        variant="outlined"
        value={imageUrl}
        onChange={updateImageUrl}
        fullWidth
        margin="normal"
      />
      <div style={{ marginTop: theme.spacing(4), display: "flex" }}>
        <ColorButton
          type="submit"
          variant="outlined"
          sx={{ margin: theme.spacing(2) }}
        >
          {id ? "Save Changes" : "Create New"}
        </ColorButton>
        <ColorIconButton aria-label="fingerprint" onClick={onDelete}>
          <DeleteIcon />
        </ColorIconButton>
      </div>
    </form>
  );
};

//export default Blog;
export default React.memo(Blog);
