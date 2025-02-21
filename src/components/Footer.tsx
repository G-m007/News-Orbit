import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center mb-6">
          {/* Brand Section */}
          <div className="mb-4 text-center max-w-xl">
            <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              News Orbit
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Terms of Use
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} News Orbit. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <Link 
                href="/" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Made with ❤️ by News Orbit Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 