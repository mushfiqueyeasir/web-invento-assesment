import { useState } from "react";
import PostCreateModal from "./component/postCreateModal/PostCreateModal";
import useFetch from "./hook/useFetch";
import HomePage from "./page/homePage/HomePage";

function App() {
  const [post, backupPost] = useFetch();
  const [posts, setPost] = useState(useFetch()[0]);

  const handleRefetchData = () => {
    setPost(backupPost);
    localStorage.setItem("postData", JSON.stringify(backupPost));
  };

  const handleDeletePost = (id) => {
    const newPosts = post.filter((item) => item.id !== id);
    setPost(newPosts);
    localStorage.setItem("postData", JSON.stringify(newPosts));
  };

  const handleUpdatePost = (id, data) => {
    const postToUpdate = post.find((item) => item.id === id);
    postToUpdate.title = data.title;
    postToUpdate.body = data.body;

    const updatedPost = post.map((item) =>
      item.id === id ? postToUpdate : item
    );

    setPost(updatedPost);
    localStorage.setItem("postData", JSON.stringify(updatedPost));
    document.getElementById(id).checked = false;
  };
  const handleCreatePost = (data) => {
    data.id = post[post.length - 1].id + 1;
    console.log(data);
    setPost(post.concat(data));
    localStorage.setItem("postData", JSON.stringify(post.concat(data)));
    document.getElementById("createPost").checked = false;
  };

  return (
    <div className="">
      <HomePage
        post={posts}
        refetch={handleRefetchData}
        handleDeletePost={handleDeletePost}
        handleUpdatePost={handleUpdatePost}
      />
      <div className="fixed top-5 lg:top-[unset] lg:bottom-[50%] right-5 ">
        <label
          htmlFor="createPost"
          className="py-3 px-4 text-white bg-blue-500 rounded-full cursor-pointer"
        >
          <i class="fa-solid fa-pen"></i>
        </label>
      </div>
      <PostCreateModal handleCreatePost={handleCreatePost} />
    </div>
  );
}

export default App;
