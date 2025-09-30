import React, { useState, useMemo } from 'react';
import { Copy, Search, Sparkles } from 'lucide-react';
import { FontCard } from './components/FontCard';
import { fontStyles } from './utils/fontStyles';

function App() {
  const [inputText, setInputText] = useState('Your Text Here');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredFonts = useMemo(() => {
    if (!searchQuery.trim()) return fontStyles;
    return fontStyles.filter(font => 
      font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bold Text Generator
            </h1>
          </div>
          
          {/* Input Section */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here..."
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors bg-white/90 backdrop-blur-sm"
              />
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search font styles..."
                className="w-full pl-12 pr-6 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors bg-white/90 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Choose from <span className="font-semibold text-purple-600">{fontStyles.length}+</span> stylish fonts
            </p>
          </div>
        </div>
      </div>

      {/* Font Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFonts.map((font, index) => (
            <FontCard
              key={index}
              font={font}
              text={inputText}
              index={index}
              isCopied={copiedIndex === index}
              onCopy={handleCopy}
            />
          ))}
        </div>

        {filteredFonts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No fonts found matching your search.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Created with ❤️ using React and Unicode transformations
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;