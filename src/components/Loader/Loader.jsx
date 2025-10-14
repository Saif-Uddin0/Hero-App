import React from 'react';


const Loader = ({ fullScreen = true }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }
  return (
    <span className="loading loading-spinner text-purple-600"></span>
  );
};

export default Loader;