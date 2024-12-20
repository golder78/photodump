import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Update with your backend URL

// Fetch all photos
export const fetchPhotos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/photos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

// Delete a photo by its ID
export const deletePhoto = async (photoId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/delete/${photoId}`);
    return { success: true, message: response.data.message };
  } catch (error) {
    console.error("Error deleting photo:", error);
    return { success: false, message: error.message };
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Add a new category
export const addCategory = async (category) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categories`, category);
    return { success: true, message: 'Category added successfully', data: response.data };
  } catch (error) {
    console.error("Error adding category:", error);
    return { success: false, message: error.message };
  }
};

// Fetch photos filtered by category
export const fetchFilteredPhotos = async (categoryId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/photos?category=${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered photos:", error);
    return [];
  }
};
