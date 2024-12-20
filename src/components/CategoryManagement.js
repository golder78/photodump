import React, { useState, useEffect } from 'react';
import { fetchCategories, addCategory } from '../services/api';

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory) {
      await addCategory(newCategory);
      setCategories([...categories, { category_name: newCategory }]);
      setNewCategory('');
    }
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.category_id}>{category.category_name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
}

export default CategoryManagement;
