'use client';

import { useState } from 'react';
import Header from '../components/Header';
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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Header 
        onBreakingNewsClick={handleBreakingNews}
        onCategorySelect={handleCategorySelect}
      />
      <div className="container mx-auto px-4 py-8">
        <SearchBar 
          onSearch={handleSearch}
          onLanguageChange={setSelectedLanguage}
          onSortChange={setSortBy}
        />
        <NewsList 
          searchQuery={effectiveQuery}
          language={selectedLanguage}
          sortBy={sortBy}
          category={category}
        />
      </div>
    </main>
  );
}