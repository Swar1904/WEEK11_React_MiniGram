import React, { useState } from "react";
import { Heart } from "lucide-react";

export const initialPosts = [
  {
    id: 1,
    username: "swar1904",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Sunset_in_Awash_National_Park.jpg",
    caption: "🌅 Chasing sunsets and making memories!",
    likes: 0,
  },
  {
    id: 2,
    username: "travel_enthusiast",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    caption: "✈️ Another day, another adventure! #wanderlust",
    likes: 0,
  },
  {
    id: 3,
    username: "foodie_adventures",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    caption: "🍜 Found this amazing local spot! The flavors are incredible!",
    likes: 0,
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  // Add a new post
  const addPost = (e) => {
    e.preventDefault();
    if (!username || !imageUrl || !caption) return;

    const newPost = {
      id: posts.length + 1,
      username,
      imageUrl,
      caption,
      likes: 0,
    };

    setPosts([newPost, ...posts]);
    setUsername("");
    setImageUrl("");
    setCaption("");
  };

  // Handle like button
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <>
      <h2>📸 Ethiopia Feed</h2>

      {/* Form to add new post */}
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <br />
        <button type="submit">Post</button>
      </form>

      {/* Display posts */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h3>@{post.username}</h3>
            <img src={post.imageUrl} alt="post" width="300" />
            <p>{post.caption}</p>
            <button
              onClick={() => handleLike(post.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <Heart size={18} color="red" />
              {post.likes} likes
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
