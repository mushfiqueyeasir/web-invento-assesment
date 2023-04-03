import React from "react";

const PostUpdateModal = ({ post, handleUpdatePost }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
    };

    handleUpdatePost(post.id, data);
  };
  return (
    <div>
      <input type="checkbox" id={post.id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Update Post</h3>

          <form className="py-3" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-4 items-center">
              <input
                name="title"
                type="text"
                placeholder="Post Title"
                defaultValue={post.title}
                className="input input-bordered w-full"
              />
              <textarea
                name="body"
                placeholder="Post Description"
                defaultValue={post.body}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <div className="pt-3 flex justify-end gap-3">
              <button type="submit" htmlFor={post.id} className="btn">
                Submit
              </button>
              <label htmlFor={post.id} className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostUpdateModal;
