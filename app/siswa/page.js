"use client";
import { useEffect, useState } from "react";
function page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/posts");
        const response = await data.json();
        setPosts(response.posts);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="row">
      <div>
        {posts.map((post) => (
          <div key={post.kode}> {post.nama} </div>
        ))}
      </div>
    </div>
  );
}

export default page;
