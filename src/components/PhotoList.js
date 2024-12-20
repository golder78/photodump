import React, { useState, useEffect } from 'react';
import { fetchPhotos, deletePhoto } from '../services/api'; // Import the API functions

function PhotoList() {
  const [photos, setPhotos] = useState([]);  // State to store photos
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);  // Track any errors

  // Fetch photos from the server when the component mounts
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data);  // Store the fetched photos
        setLoading(false);  // Set loading to false when data is fetched
      } catch (err) {
        setError("Failed to fetch photos.");  // Set error if the fetch fails
        setLoading(false);  // Set loading to false even on error
      }
    };
    getPhotos();
  }, []);  // Empty dependency array means this runs once when the component mounts

  // Handle photo deletion
  const handleDelete = async (photoId) => {
    const confirmed = window.confirm("Are you sure you want to delete this photo?");
    if (confirmed) {
      try {
        const response = await deletePhoto(photoId);  // Call the API to delete the photo
        if (response.success) {
          // Update the photo list by filtering out the deleted photo
          setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== photoId));
        } else {
          alert("Failed to delete photo. Please try again.");
        }
      } catch (err) {
        alert("Failed to delete photo. Please try again.");
      }
    }
  };

  // Display loading, error, or the list of photos
  if (loading) {
    return <div>Loading photos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>My Photos</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>  {/* Make sure the key corresponds to the correct field */}
            <img src={photo.file_path} alt={photo.description} width={100} />
            <div>{photo.description}</div>
            <div>Category: {photo.category_name}</div>
            <div>Tags: {photo.tags ? photo.tags.join(', ') : 'No tags'}</div>
            <button onClick={() => handleDelete(photo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
