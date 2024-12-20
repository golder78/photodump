import React, { useState } from 'react';
import axios from 'axios';

function PhotoUpload() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('description', description);
    formData.append('category', category);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, // Include cookies for session handling
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error uploading photo');
    }
  };

  return (
    <div>
      <h2>Upload Photo</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category ID"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PhotoUpload;
