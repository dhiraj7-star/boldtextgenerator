import React from 'react';
import { Copy, Check } from 'lucide-react';
import { FontStyle } from '../types/FontStyle';

interface FontCardProps {
  font: FontStyle;
  text: string;
  index: number;
  isCopied: boolean;
  onCopy: (text: string, index: number) => void;
}

export function FontCard({ font, text, index, isCopied, onCopy }: FontCardProps) {
  const transformedText = font.transform(text);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Bold': 'bg-blue-100 text-blue-800',
      'Italic': 'bg-purple-100 text-purple-800',
      'Script': 'bg-pink-100 text-pink-800',
      'Monospace': 'bg-green-100 text-green-800',
      'Sans-serif': 'bg-orange-100 text-orange-800',
      'Serif': 'bg-red-100 text-red-800',
      'Decorative': 'bg-indigo-100 text-indigo-800',
      'Outline': 'bg-teal-100 text-teal-800',
      'Creative': 'bg-violet-100 text-violet-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 text-sm mb-2">{font.name}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(font.category)}`}>
            {font.category}
          </span>
        </div>
        <button
          onClick={() => onCopy(transformedText, index)}
          className="p-2 rounded-lg bg-gray-50 hover:bg-purple-100 transition-colors group-hover:bg-purple-50"
          title="Copy to clipboard"
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600 hover:text-purple-600" />
          )}
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 min-h-[80px] flex items-center justify-center">
        <p 
          className="text-center break-all leading-relaxed"
          style={{ 
            fontFamily: font.fontFamily,
            fontSize: font.fontSize || '18px',
            fontWeight: font.fontWeight,
            fontStyle: font.fontStyle,
            textDecoration: font.textDecoration,
            textShadow: font.textShadow,
            background: font.background,
            WebkitBackgroundClip: font.background ? 'text' : undefined,
            WebkitTextFillColor: font.background ? 'transparent' : undefined,
            color: font.color || '#1f2937'
          }}
        >
          {transformedText}
        </p>
      </div>

      {isCopied && (
        <div className="mt-3 text-center">
          <span className="text-sm text-green-600 font-medium">Copied!</span>
        </div>
      )}
    </div>
  );
}