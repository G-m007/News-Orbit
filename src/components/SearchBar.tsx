'use client';

import { useState, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onLanguageChange: (language: string) => void;
    onSortChange: (sortBy: string) => void;
    onCategoryChange: (category: string) => void;
  }
  
  export default function SearchBar({ onSearch, onLanguageChange, onSortChange, onCategoryChange }: SearchBarProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      onSearch(inputValue.trim());
    };

    return (
      <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        
        <select
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="en"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>

        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="publishedAt"
        >
          <option value="publishedAt">Latest</option>
          <option value="relevancy">Relevant</option>
          <option value="popularity">Popular</option>
        </select>

        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="general"
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <button 
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    );
  }