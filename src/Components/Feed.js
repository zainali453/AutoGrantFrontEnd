/** @format */

import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";

const postData = [
  {
    displayName: "Zain Ali",
    username: "zainali1231231",
    verified: "Heeloo",
    text: "Coding is fun! #Programming",
    avatar: "https://placekitten.com/200/200",
    image: [
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
    ],
  },
  {
    displayName: "Zain Ali",
    username: "zainali1231231",
    verified: "Heeloo",
    text: "Coding is fun! #Programming",
    avatar: "https://placekitten.com/200/200",
    image: [
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
    ],
  },
  {
    displayName: "Zain Ali",
    username: "zainali1231231",
    verified: "Heeloo",
    text: "Coding is fun! #Programming",
    avatar: "https://placekitten.com/200/200",
    image: [
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
    ],
  },
  {
    displayName: "Zain Ali",
    username: "zainali1231231",
    verified: "Heeloo",
    text: "Coding is fun! #Programming",
    avatar: "https://placekitten.com/200/200",
    image: [
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
    ],
  },
  {
    displayName: "Zain Ali",
    username: "zainali1231231",
    verified: "Heeloo",
    text: "Coding is fun! #Programming",
    avatar: "https://placekitten.com/200/200",
    image: [
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
      "https://placekitten.com/200/200",
    ],
  },
];
function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className='flex flex-col items-center'>
        {postData.map((post, index) => (
          <div
            key={index}
            className={
              index == 0
                ? "p-10 mt-24 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-2/5"
                : "p-10 mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-2/5"
            }
          >
            <Post {...post} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Feed;
