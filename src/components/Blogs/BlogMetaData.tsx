import React, { useContext, useMemo, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import DateAndTime from "../Common/DateAndTime";
import DisplayValue from "../Common/DisplayValue";

const BlogMetaData = ({ theme }: any) => {
  console.log("CHILD OF BlogSummaryList : BlogMetaData.render");

  const [pendingBlogs, setPendingBlogs] = useState(["30", "9", "1"]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  console.log('pendingBlogs recomputed')
  const getBlogsLength = `No. of pending blogs for the Month: ${pendingBlogs.length}`;

//   const getBlogsLength = useMemo(() => {
//     console.log('pendingBlogs recomputed')
//     return `No. of pending blogs for the Month: ${pendingBlogs.length}`;
//   }, [pendingBlogs]);

  const handleClick = () => {
    setPendingBlogs(pendingBlogs.slice());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      }}
    >
      <DisplayValue
        value={getBlogsLength}
        theme={theme}
        onClick={handleClick}
      />
      <DateAndTime
        theme={theme}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
};

//export default BlogMetaData;

export default React.memo(BlogMetaData);

// const getBlogsLength = useMemo(() => {
//   return `No. of pending blogs for the Month: ${pendingBlogs.length}`
// }, [pendingBlogs]);
