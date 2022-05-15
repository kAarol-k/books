import React from 'react';

function NoImage() {
  return (
    <div
      className="NoImage"
      style={{
        width: '120px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
      }}
    >
      No image
    </div>
  );
}

export default NoImage;
