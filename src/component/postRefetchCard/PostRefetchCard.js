import React from "react";

const PostRefetchCard = ({ refetch }) => {
  return (
    <div className="card ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">No Post In Your Local Host!</h2>
        <p>Want to refetch it from server?</p>
        <div className="card-actions justify-end">
          <button onClick={refetch} className="btn btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostRefetchCard;
