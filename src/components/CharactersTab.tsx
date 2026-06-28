import React, { useState } from 'react';
import { CHARACTERS } from '../data/characters';
import { CharacterCard } from './CharacterCard';
import { Character, DeathEra } from '../types';
import { Search, Filter, RotateCcw, Users } from 'lucide-react';

interface CharactersTabProps {
  selectedDept: string | null;
  setSelectedDept: (dept: string | null) => void;
  onSelectCharacter: (char: Character) => void;
}

export const CharactersTab: React.FC<CharactersTabProps> = ({
  selectedDept,
  setSelectedDept,
  onSelectCharacter,
}) => {
  const [selectedEra, setSelectedEra] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const eras: (DeathEra | '전체')[] = ['전체', '삼국시대', '조선시대', '근대', '현대', '불명'];
  const depts = ['전체', '토벌팀', '인도팀', '판결팀', '총무팀', '개발팀', '구내식당', 'CEO 직할'];

  const filtered = CHARACTERS.filter((char) => {
    const matchesDept = selectedDept && selectedDept !== '전체' ? char.department === selectedDept : true;
    const matchesEra = selectedEra !== '전체' ? char.deathEra === selectedEra : true;
    const matchesSearch = searchQuery
      ? char.name.includes(searchQuery) ||
        char.role.includes(searchQuery) ||
        char.tags.some((t) => t.includes(searchQuery))
      : true;
    return matchesDept && matchesEra && matchesSearch;
  });

  return (
    <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-transparent text-[#e0e0e0]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title Block */}
        <div className="border-b border-red-900/60 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="px-2 py-0.5 bg-red-600 text-black font-mono text-[10px] uppercase font-bold">
              Dead End Roster
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-serif mt-2 text-white">
              데드엔드 컴퍼니 사신 기록록
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              환생을 멈추고 명계 기업의 사신으로 되살아난 주요 인물들의 기록
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 border border-gray-800 text-xs font-mono">
            <Users className="w-4 h-4 text-red-500" />
            <span className="text-gray-300">총 등록 인원: <strong className="text-white font-black">{filtered.length}명</strong> / 14명</span>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-[#141414] p-5 border border-gray-800 shadow-sm space-y-5 select-none">
          
          {/* Search Box */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="사신 이름, 직책, 태그 검색 (예: 강림, 순애, 수석...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#1a1a1a] border border-gray-800 text-xs text-gray-200 focus:outline-none focus:border-red-600 font-serif"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 hover:text-red-400 font-mono"
                >
                  지우기
                </button>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedDept(null);
                setSelectedEra('전체');
                setSearchQuery('');
              }}
              className="px-3 py-2 bg-[#1a1a1a] border border-gray-800 text-xs text-gray-400 hover:text-white hover:border-red-600 transition-colors flex items-center gap-1.5 justify-center font-mono"
              title="필터 초기화"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-500" />
              전체 초기화
            </button>
          </div>

          {/* Department Filter Bar */}
          <div className="space-y-2 border-t pt-4 border-gray-850">
            <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <Filter className="w-3 h-3 text-red-500" />
              부서별 소속 분류
            </p>
            <div className="flex flex-wrap gap-1.5">
              {depts.map((dept) => {
                const isSelected = (!selectedDept && dept === '전체') || selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept === '전체' ? null : dept)}
                    className={`text-xs px-3 py-1.5 transition-all border font-serif ${
                      isSelected
                        ? 'bg-red-600 text-black font-black border-red-500 shadow-sm'
                        : 'bg-[#1a1a1a] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Death Era Filter Bar */}
          <div className="space-y-2 border-t pt-4 border-gray-850">
            <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <Filter className="w-3 h-3 text-red-500" />
              사망 시대별 정렬 (서열 순)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {eras.map((era) => {
                const isSelected = selectedEra === era;
                return (
                  <button
                    key={era}
                    onClick={() => setSelectedEra(era)}
                    className={`text-xs px-3 py-1.5 transition-all border font-serif ${
                      isSelected
                        ? 'bg-[#2a1212] text-red-400 font-bold border-red-800 shadow-sm'
                        : 'bg-[#1a1a1a] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200'
                    }`}
                  >
                    {era}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Characters Grid Output */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onSelect={onSelectCharacter}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#141414] border border-dashed border-gray-800 p-12 text-center space-y-3">
            <Users className="w-12 h-12 text-gray-600 mx-auto" />
            <h4 className="text-lg font-bold font-serif text-gray-300">선택한 조건에 일치하는 사신 기록이 없습니다.</h4>
            <p className="text-xs text-gray-500">
              검색어나 부서, 시대 필터 조건을 다른 항목으로 변경해 보십시오.
            </p>
            <button
              onClick={() => { setSelectedDept(null); setSelectedEra('전체'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-red-600 text-black text-xs font-black hover:bg-white transition-colors"
            >
              전체 사신 보기
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
