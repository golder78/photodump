import React from 'react';

// Example of a photo detail component
function PhotoDetail({ photo }) {
  // Fallback if no photo is passed as a prop
  if (!photo) {
    return <div>No photo details available.</div>;
  }

  return (
    <div className="photo-detail">
      <h2>{photo.title}</h2>
      <img src={photo.url} alt={photo.description} style={{ maxWidth: '100%' }} />
      <p>{photo.description}</p>
      <p><strong>Category:</strong> {photo.category}</p>
      {/* You can add more details here like tags, uploader, etc. */}
    </div>
  );
}

export default PhotoDetail;
