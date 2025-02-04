interface NewsCardProps {
    article: {
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      source: { name: string };
      publishedAt: string;
    };
  }
  
  export default function NewsCard({ article }: NewsCardProps) {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex">
          {article.urlToImage ? (
            <div className="w-1/3">
              <img 
                src={article.urlToImage} 
                alt={article.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('bg-gray-700', 'flex', 'items-center', 'justify-center');
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-500">No image</span>';
                }}
              />
            </div>
          ) : (
            <div className="w-1/3 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
          <div className="w-2/3 p-6">
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xl font-bold mb-2 block"
            >
              {article.title}
            </a>
            <p className="text-gray-400 text-sm mb-4">
              {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-300">{article.description}</p>
          </div>
        </div>
      </div>
    );
  }