import { Context, createContext, ReactNode, useMemo, useReducer } from 'react';
import { blogPosts } from '../models';

interface Props {
  children?: ReactNode
}

// Define initial state for blogs
const initialState = blogPosts;

// Define reducer function to handle state updates
const blogReducer = (state: any, action: any) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_BLOG':
      return [...state, payload];
    case 'EDIT_BLOG':
      return [...state.filter((blog: any) => blog.id !== payload.id), payload];
    case 'DELETE_BLOG':
      return state.filter((blog: any) => blog.id !== payload);
    default:
      return state;
  }
};

// Create a new context for blogs
export const BlogContext: Context<any> = createContext(undefined);

// Create a provider context for blogs
export const BlogProvider = ({ children }: Props) => {
  const [blogs, dispatch] = useReducer(blogReducer, initialState);

  // define action functions
  const addBlog = (newBlog: any) => {
    dispatch({ type: 'ADD_BLOG', payload: newBlog });
  };

  const editBlog = (blog: any) => {
    dispatch({ type: 'EDIT_BLOG', payload: blog });
  };

  const deleteBlog = (blogId: number) => {
    dispatch({ type: 'DELETE_BLOG', payload: blogId });
  };

  // use memo to memoize the context value to reduce re-renders of children
  //const contextValue = useMemo(() => ({ blogs, addBlog, deleteBlog, editBlog }), [blogs])

  const contextValue = { blogs, addBlog, deleteBlog, editBlog }

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
};