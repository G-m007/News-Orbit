'use client';

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NewsList from '../components/NewsList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [category, setCategory] = useState('general');

  const handleBreakingNews = () => {
    setSearchQuery('');
    setCategory('general');
    setSortBy('publishedAt');
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCategory(''); // Clear category when searching
  };

  const effectiveQuery = searchQuery || 'top headlines';

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar 
        onSearch={handleSearch}
        onLanguageChange={setSelectedLanguage}
        onSortChange={setSortBy}
        onCategoryChange={handleCategorySelect}
      />
      <NewsList 
        searchQuery={effectiveQuery}
        language={selectedLanguage}
        sortBy={sortBy}
        category={category}
      />
    </div>
  );
}