import React from 'react';
import PhotoUpload from './components/PhotoUpload';
import PhotoList from './components/PhotoList';
import SearchFilter from './components/SearchFilter';
import CategoryManagement from './components/CategoryManagement';
import TagManagement from './components/TagManagement';


function App() {
  return (
    <div>
      <PhotoUpload />
      <PhotoList />
      <SearchFilter />
      <CategoryManagement />
      <TagManagement />
    </div>
  );
}

export default App;
