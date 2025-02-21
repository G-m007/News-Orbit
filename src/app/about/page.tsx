export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">About News Orbit</h1>
      
      <div className="space-y-6 text-gray-300">
        <p>
          News Orbit is your trusted destination for comprehensive global news coverage. 
          Founded in 2024, we strive to deliver accurate, timely, and relevant news from around the world.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to provide readers with reliable, unbiased news coverage across various categories 
          including politics, technology, business, science, health, and entertainment.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accuracy and fact-based reporting</li>
          <li>Editorial independence</li>
          <li>Transparency in our operations</li>
          <li>Respect for reader privacy</li>
          <li>Commitment to journalistic integrity</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Coverage</h2>
        <p>
          We aggregate news from trusted sources worldwide, providing our readers with diverse perspectives 
          on current events. Our platform supports multiple languages and covers various categories to 
          ensure comprehensive news coverage.
        </p>
      </div>
    </div>
  );
} 