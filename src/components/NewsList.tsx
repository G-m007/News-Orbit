'use client';

import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { fetchNews } from '@/lib/api';
import AdUnit from './AdUnit';

interface NewsListProps {
  searchQuery: string;
  language: string;
  sortBy: string;
  category?: string;
}

interface Article {
  url: string;
  title: string;
  description?: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt: string;
}

export default function NewsList({ searchQuery, language, sortBy, category }: NewsListProps) {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const articles = await fetchNews(searchQuery, language, sortBy, category);
        setNews(articles);
        setError('');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch news';
        setError(errorMessage);
        console.error('News fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [searchQuery, language, sortBy, category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-red-900/50 rounded-lg">
        <p className="text-red-200">{error}</p>
        <p className="text-red-300 text-sm mt-2">
          Please check your API key and try again
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={`${article.url}-${index}`}>
            <NewsCard article={article} />
            {(index + 1) % 4 === 0 && index !== news.length - 1 && (
              <div className="my-8 py-4 border-t border-b border-gray-700">
                <h3 className="text-gray-400 text-sm mb-4">Advertisement</h3>
                <AdUnit />
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400">
          No news articles found
        </div>
      )}
    </div>
  );
}