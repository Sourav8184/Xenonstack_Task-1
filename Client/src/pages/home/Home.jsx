import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../../components/postCard/PostCard";
function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/post/getPosts");
      const data = await response.json();
      if (response.ok) {
        setPosts(data.data.posts);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to RentEase</h1>
        <h3 className="text-gray-500">Renting made easy.</h3>
      </div>

      <div className="max-w-8xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-5 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
