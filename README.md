# React Performance with state management and memoization

This is a basic react Blogging app with the ability to write new, edit and delete exisiting blogs.

<img width="1725" alt="Screenshot 2023-06-12 at 12 22 59 PM" src="https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/8152e2a3-ad11-428d-a993-2ec33a4f3e77">



### The component heirarchy is,

<img width="1000" alt="Component Heirarchy" src="https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/8e7c4f41-bd61-4762-b457-41f7541e77ed">

The above diagram depicts the children of Blog Page and how each child should be agnostic to changes in the other child which are not related to it. If a child doesn't refer to a state in the parent component, then the parent state change should not effect the child component and it should not re-render.

To improve performance we need to reduce the unecessary re-renders of components. We achieve this by using-

1. `React.memo()`, `useMemo`, `useCallback` - for <b>memoization</b>. Refer [this](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/) article for more on memoization.
2.  Using `Context` with <b>children</b> as props to avoid unnecessary re-renders of child components. The structure used to define the context is mentioned [here](https://kentcdodds.com/blog/how-to-use-react-context-effectively).

With these we can reduce the re-renders and thus improving load time for the overall application when user interacts with it.

# Performance
We can see in the profiler that with the above mentioned practices the uneccesary re-renders,

### Before optimizations -  all the children update
<img width="1010" alt="Screenshot 2023-06-14 at 9 41 35 PM" src="https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/d3e04d1a-a1f3-482c-b4a5-1a0361c8f733">


### After optimization - only relevant children update
![Screenshot 2023-06-14 at 9 36 30 PM](https://github.com/Apoorva2696/react-state-management-performance/assets/23259042/b6f8cf0b-087d-4cb1-ac4e-5ff24c8de28e)



# Playground

Use this app as playground to test how using different hooks you can improve perfomance of your app. You can also see in the Profiler devtool how the app is caching components and preventing their re-render.

Open the profiler tool and uncomment the code to see how the best practices stop the re-rendering of components.


# Get Started

To test the app:

1. Create a clone and run the command npm i
2. Run the command `npm run dev`


