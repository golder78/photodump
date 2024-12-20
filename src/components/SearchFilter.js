import React, { useState } from 'react';
import { fetchFilteredPhotos } from '../services/api';

function SearchFilter() {
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const handleFilter = async () => {
    const photos = await fetchFilteredPhotos(category, tags);
    setFilteredPhotos(photos);
  };

  return (
    <div>
      <h2>Filter Photos</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleFilter}>Search</button>
      
      <div>
        <h3>Filtered Photos</h3>
        <ul>
          {filteredPhotos.map((photo) => (
            <li key={photo.photo_id}>
              <img src={photo.file_path} alt={photo.description} width={100} />
              <div>{photo.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
