import { NavLink } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Edit } from "@mui/icons-material";
import { ColorIconButton } from "../Common";
import { BlogContext } from "../../context/BlogContext";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogView = ({ blog, theme }: any) => {
  console.log('CHILD OF BlogSummaryList : BlogView.render');

  const { deleteBlog } = useContext(BlogContext);

  const onDelete = () => {
    deleteBlog(blog.id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={blog.id}>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={blog.imageUrl}
          alt={blog.title}
        />
        <CardContent sx={{ display: "flex" }}>
          <div style={{ width: "95%" }}>
            <Typography variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.content}
            </Typography>
          </div>
          <NavLink
            to={`/edit/${blog.id}`}
            style={{
              color: theme.palette.secondary.main,
              marginTop: theme.spacing(2),
              marginRight: 0,
            }}
          >
            <ColorIconButton aria-label="fingerprint">
              <Edit />
            </ColorIconButton> 
          </NavLink>
          <ColorIconButton aria-label="fingerprint" onClick={onDelete}>
              <DeleteIcon />
            </ColorIconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogView;
