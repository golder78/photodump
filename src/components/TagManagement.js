import React, { useState } from 'react';

function TagManagement() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div>
      <h2>Tag Management</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a new tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            {tag}{' '}
            <button onClick={() => handleDeleteTag(tag)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagManagement;
