import React from 'react';
import { Character } from '../types';
import { Sparkles, Tag, Swords, ArrowRight, Terminal } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onSelect: (char: Character) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect }) => {
  const getDeptBadgeColor = (dept: string) => {
    switch (dept) {
      case '토벌팀':
        return 'bg-cyan-950 text-cyan-300 border-cyan-800';
      case '인도팀':
        return 'bg-orange-950 text-orange-300 border-orange-800';
      case '판결팀':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      case '총무팀':
        return 'bg-slate-800 text-slate-200 border-slate-700';
      case '개발팀':
        return 'bg-violet-950 text-violet-300 border-violet-800';
      case '구내식당':
        return 'bg-red-950 text-red-300 border-red-800';
      default:
        return 'bg-rose-950 text-rose-300 border-rose-800';
    }
  };

  return (
    <div
      onClick={() => onSelect(character)}
      className="bg-[#141414] border border-gray-800 p-5 transition-all duration-200 hover:border-red-600 hover:shadow-[6px_6px_0px_#991b1b] cursor-pointer flex flex-col justify-between group select-none relative overflow-hidden text-[#e0e0e0]"
    >
      {/* Background Illustration Glow */}
      {character.imageUrl && (
        <div className="absolute right-0 top-0 w-3/5 h-full pointer-events-none overflow-hidden z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
          <img
            src={character.imageUrl}
            alt={character.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#141414]/80 to-[#141414]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>
      )}

      <div className="relative z-10">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase border ${getDeptBadgeColor(character.department)}`}>
              {character.department}
            </span>
            <span className="text-[10px] font-mono text-gray-400 bg-[#1a1a1a] px-2 py-0.5 border border-gray-800">
              {character.deathEra}
            </span>
            {character.euniriComment && (
              <span className="text-[9px] font-mono text-[#a2d2ff] bg-[#3a0ca3]/40 px-1.5 py-0.5 border border-[#3a0ca3]/80 flex items-center gap-1" title="은이리의 개발 코멘트 수록">
                <Terminal className="w-2.5 h-2.5 text-[#a2d2ff]" /> 은이리 코멘트
              </span>
            )}
          </div>
        </div>

        {/* Prominent Profile Image Box */}
        {character.imageUrl && (
          <div className="w-full h-44 mb-4 rounded border border-gray-800/80 overflow-hidden relative shadow-lg group-hover:border-red-600 transition-all">
            <img
              src={character.imageUrl}
              alt={character.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Name & Role */}
        <h3 className="text-xl font-black font-serif text-white tracking-tight group-hover:text-red-500 transition-colors flex items-center gap-1.5">
          {character.name}
          {character.myeongdoList?.some(m => m.stage === '천(天)') && (
            <Sparkles className="w-4 h-4 text-red-500 animate-pulse" title="명도 최종 경지 [天] 보유자" />
          )}
        </h3>
        <p className="text-xs font-medium text-gray-400 mt-0.5">
          {character.role}
        </p>

        {/* Signature Quote */}
        <div className="mt-3 p-2.5 bg-[#1a1a1a]/90 backdrop-blur-sm border-l-2 border-red-600">
          <p className="text-xs font-serif italic text-gray-300 line-clamp-2">
            "{character.quotes[0]}"
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-4">
          {character.tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="text-[9px] font-mono text-gray-400 bg-[#222]/80 px-1.5 py-0.5 rounded-sm flex items-center gap-0.5">
              <Tag className="w-2.5 h-2.5 text-gray-500" />
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="relative z-10 mt-5 pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-bold text-gray-500 group-hover:text-gray-300 bg-[#141414]">
        <span className="flex items-center gap-1 text-[11px] font-mono">
          <Swords className="w-3.5 h-3.5 text-red-500" />
          명도 기록 조회
        </span>
        <span className="flex items-center gap-1 text-[11px] text-red-500 group-hover:translate-x-1 transition-transform font-black">
          열람 <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
