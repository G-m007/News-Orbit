const TOP_NEWS_ENDPOINT = 'https://newsapi.org/v2/top-headlines';
const EVERYTHING_ENDPOINT = 'https://newsapi.org/v2/everything';

export async function fetchNews(searchQuery: string, language: string, sortBy: string, category?: string) {
  const isTopHeadlines = searchQuery === 'top headlines' || category;
  const endpoint = isTopHeadlines ? TOP_NEWS_ENDPOINT : EVERYTHING_ENDPOINT;
  
  const params: Record<string, string> = {
    language,
    apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
  };

  if (isTopHeadlines && category) {
    params.category = category;
  } else if (!isTopHeadlines) {
    params.q = searchQuery;
    params.sortBy = sortBy;
  }

  const queryString = new URLSearchParams(params).toString();
  
  // Use a CORS proxy for deployed environment
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const url = process.env.NODE_ENV === 'production' 
    ? `${corsProxy}${endpoint}?${queryString}`
    : `${endpoint}?${queryString}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Origin': 'https://newsapi.org',
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}