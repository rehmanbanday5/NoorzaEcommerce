import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Instagram = ({ token }) => {
  const [image, setImage] = useState(false);
  const [instagramUrl, setInstagramUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/instagram/list");

      if (response.data.success) {
        setPosts(response.data.posts);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("instagramUrl", instagramUrl);
      formData.append("caption", caption);

      const response = await axios.post(
        backendUrl + "/api/instagram/add",
        formData,
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setImage(false);
        setInstagramUrl("");
        setCaption("");

        fetchPosts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removePost = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/instagram/remove",
        { id },
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchPosts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <p className="mb-5 text-xl font-medium">Instagram Posts</p>

      {/* ADD POST */}

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 max-w-xl">
        <div>
          <p className="mb-2">Upload Image</p>

          <label htmlFor="instagramImage">
            <img
              className="w-28 h-28 object-cover border cursor-pointer"
              src={image ? URL.createObjectURL(image) : "/placeholder.png"}
              alt=""
            />

            <input
              id="instagramImage"
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>

        <div>
          <p className="mb-2">Instagram Post URL</p>

          <input
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
            className="w-full border px-3 py-2"
            type="url"
            placeholder="https://www.instagram.com/p/..."
            required
          />
        </div>

        <div>
          <p className="mb-2">Caption (Optional)</p>

          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border px-3 py-2"
            type="text"
            placeholder="Optional caption"
          />
        </div>

        <button type="submit" className="w-32 py-3 bg-black text-white">
          Add Post
        </button>
      </form>

      {/* EXISTING POSTS */}

      <div className="mt-12">
        <p className="mb-4 font-medium">Existing Instagram Posts</p>

        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="grid grid-cols-[80px_1fr_50px] items-center gap-4 border p-3"
            >
              <img src={post.image} className="w-16 h-16 object-cover" alt="" />

              <a
                href={post.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 truncate"
              >
                {post.instagramUrl}
              </a>

              <button
                onClick={() => removePost(post._id)}
                className="text-red-500 text-xl"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
