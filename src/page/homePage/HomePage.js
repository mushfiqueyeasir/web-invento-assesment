import React from "react";
import PostCard from "../../component/postCard/PostCard";
import PostRefetchCard from "../../component/postRefetchCard/PostRefetchCard";
import PostUpdateModal from "../../component/postUpdateModal/PostUpdateModal";

const HomePage = ({ post, refetch, handleDeletePost, handleUpdatePost }) => {
  return (
    <div className="container mx-auto py-10 px-2 ">
      {post.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {post.map((item, index) => (
            <PostCard
              key={index}
              post={item}
              handleDeletePost={handleDeletePost}
            />
          ))}
          {post.map((item, index) => (
            <PostUpdateModal
              key={index}
              post={item}
              handleUpdatePost={handleUpdatePost}
            />
          ))}
        </div>
      ) : (
        <PostRefetchCard refetch={refetch} />
      )}
    </div>
  );
};

export default HomePage;
