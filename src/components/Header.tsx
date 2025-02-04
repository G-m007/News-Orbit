interface HeaderProps {
  onBreakingNewsClick: () => void;
  onCategorySelect: (category: string) => void;
}

export default function Header({ onBreakingNewsClick, onCategorySelect }: HeaderProps) {
  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">
              News<span className="text-blue-500">Orbit</span>
            </h1>
            <p className="text-gray-400 text-sm">Your Gateway to Global News</p>
          </div>
          <nav className="flex items-center space-x-6">
            <button 
              onClick={onBreakingNewsClick}
              className="text-gray-300 hover:text-white"
            >
              Breaking News
            </button>
            <select 
              onChange={(e) => onCategorySelect(e.target.value)}
              className="bg-gray-800 text-gray-300 px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
              defaultValue="general"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
}