interface SearchBarProps {
    onSearch: (query: string) => void;
    onLanguageChange: (language: string) => void;
    onSortChange: (sortBy: string) => void;
  }
  
  export default function SearchBar({ onSearch, onLanguageChange, onSortChange }: SearchBarProps) {
    return (
      <div className="mb-8 bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search news..."
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            onChange={(e) => onLanguageChange(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more languages */}
          </select>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white"
          >
            <option value="publishedAt">Latest</option>
            <option value="relevancy">Relevant</option>
            <option value="popularity">Popular</option>
          </select>
        </div>
      </div>
    );
  }