# React Performance with state management and memoization

This is a basic react Blogging app with the ability to write new, edit and delete exisiting blogs.

<img width="1725" alt="Screenshot 2023-06-12 at 12 22 59 PM" src="https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/8152e2a3-ad11-428d-a993-2ec33a4f3e77">

The component heirarchy is,

<img width="1358" alt="Untitled" src="https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/8e7c4f41-bd61-4762-b457-41f7541e77ed">

The above diagram depicts the children of BLog View and how each child should be agnostic to changes in the parent which are not related to it.
If the parent state change does not effect a component then it should no re-render.

To improve performance we need to reduce the unecessary re-renders of components. We achieve this by using-

1. `React.memo()`, useMemo, useCallback - for memoization
2.  Using Context with `children` as props to avoid unnecessary re-renders of child components. The structure used to define the context is mentioned [here](https://kentcdodds.com/blog/how-to-use-react-context-effectively).

With these we can reduce the re-renders and thus improving load time for the overall application when user interacts with it.


