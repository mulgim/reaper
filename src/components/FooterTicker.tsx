import React from 'react';
import { NEWS_ITEMS } from '../data/news';
import { Radio } from 'lucide-react';

export const FooterTicker: React.FC = () => {
  const fullText = NEWS_ITEMS.map(
    (item) => `[${item.category}] ${item.title} — ${item.content} (${item.author})`
  ).join('   //   ');

  return (
    <footer className="h-10 bg-[#0a0a0a] text-red-500 flex items-center px-6 text-xs font-mono tracking-wider border-t border-[#2d1212] select-none shrink-0 overflow-hidden z-10">
      <div className="flex items-center gap-2 pr-4 border-r border-red-950 shrink-0 bg-[#0a0a0a] z-10">
        <Radio className="w-3.5 h-3.5 text-red-600 animate-pulse" />
        <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-white">사내 속보 티커</span>
      </div>
      
      <div className="relative overflow-hidden w-full flex items-center pl-4">
        <div className="whitespace-nowrap animate-marquee flex items-center">
          <span className="text-gray-300 mr-8">{fullText}</span>
          <span className="text-gray-300 mr-8">{fullText}</span>
        </div>
      </div>
    </footer>
  );
};
