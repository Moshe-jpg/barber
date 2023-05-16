import React from "react";
import loadingIcon from "../../assets/loading.png";

const Loading = () => {
  return (
    <div className="loading-screen">
      <img className="loading-icon" src={loadingIcon} alt="Loading..."></img>
    </div>
  );
};

export default Loading;
