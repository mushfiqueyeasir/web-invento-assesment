import React from "react";

const PostCreateModal = ({ handleCreatePost }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      userId: Math.floor(Math.random() * 11),
      title: event.target.title.value,
      body: event.target.body.value,
    };

    handleCreatePost(data);
  };
  return (
    <div>
      <input type="checkbox" id="createPost" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Update Post</h3>

          <form className="py-3" onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-4 items-center">
              <input
                name="title"
                type="text"
                placeholder="Post Title"
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="body"
                placeholder="Post Description"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            <div className="pt-3 flex justify-end gap-3">
              <button type="submit" className="btn">
                Submit
              </button>
              <label htmlFor="createPost" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCreateModal;
