const GNEWS_ENDPOINT = 'https://gnews.io/api/v4';

export async function fetchNews(searchQuery: string, language: string, sortBy: string, category?: string) {
  const isTopHeadlines = searchQuery === 'top headlines' || category;
  const endpoint = isTopHeadlines 
    ? `${GNEWS_ENDPOINT}/top-headlines` 
    : `${GNEWS_ENDPOINT}/search`;

  const params: Record<string, string> = {
    apikey: process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
    lang: language,
    max: '10',
    sortby: sortBy === 'publishedAt' ? 'published_at' : sortBy, // Map to GNews sort parameters
  };

  // Handle search query
  if (!isTopHeadlines) {
    params.q = searchQuery;
  } else if (category && category !== 'general') {
    params.category = category;
    params.q = 'top'; // Required for GNews API
  } else {
    params.q = 'top'; // Default query for top headlines
  }

  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}?${queryString}`;
    console.log('Fetching URL:', url); // Debug log

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`API Error: ${errorData.errors?.[0] || 'Failed to fetch news'}`);
    }

    const data = await response.json();

    if (!data.articles || !Array.isArray(data.articles)) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from API');
    }

    return data.articles.map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.image,
      source: { name: article.source.name },
      publishedAt: article.publishedAt
    }));
  } catch (error) {
    console.error('Detailed error:', error);
    throw error;
  }
}