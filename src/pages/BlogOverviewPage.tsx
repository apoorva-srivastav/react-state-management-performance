import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BlogContext } from "../context/BlogContext";
import { Fragment, useContext, useMemo } from "react";
import BlogView from "../components/Blogs/BlogView";
import BlogMetaData from "../components/Blogs/BlogMetaData";

const BlogOverviewPage = () => {
  console.log("BlogOverviewPage.render");

  const { blogs } = useContext(BlogContext);
  const theme = useTheme();

  return (
    <div style={{padding: '10px'}}>
      <div style={{border: `1px solid ${theme.palette.primary.main}`}}>
      <BlogMetaData theme={theme}/>
      </div>
      <div style={{border: `1px solid ${theme.palette.primary.main}`, marginTop: '5px'}}>
      <Grid container spacing={4} sx={{ padding: theme.spacing(4) }}>
        {blogs.map((blog: any) => (
          <BlogView blog={blog} theme={theme} key={blog.id} />
        ))}
      </Grid>
      </div>
    </div>
  );

  // return (
  //   <Fragment>
  //     <BlogMetaData theme={theme}/>
  //     <Grid container spacing={4} sx={{ padding: theme.spacing(4) }}>
  //       {blogs.map((blog: any) => (
  //         <BlogView blog={blog} theme={theme} key={blog.id} />
  //       ))}
  //     </Grid>
  //   </Fragment>
  // );
};

export default BlogOverviewPage;
