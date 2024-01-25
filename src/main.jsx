import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Home from "./components/Home/Home.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetails from "./components/FriendDetail/FriendDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetail from "./components/Postdetails/PostDetail.jsx";

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path:"/about",
//     element: <About/>
//   },
//   {
//     path:"/contact",
//     element: <Contact/>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friend/:friendId",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path:"/post/:postId",
        element: <PostDetail/>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path:"*",
    element: <div>404 not found</div>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
