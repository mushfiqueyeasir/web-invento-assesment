import React from "react";

const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="card shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-lg text-left capitalize">{post.title}</h2>
        <p className="text-justify">{post.body}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDeletePost(post.id)}
            className="py-2 px-3 text-white bg-red-500 rounded-full"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <label
            htmlFor={post.id}
            className="py-2 px-3 text-white bg-blue-500 rounded-full cursor-pointer"
          >
            <i class="fa-solid fa-pen"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
