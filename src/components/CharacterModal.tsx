import React, { useEffect } from 'react';
import { Character } from '../types';
import { X, Swords, Sparkles, UserCheck, MessageSquareQuote, ShieldAlert, Terminal } from 'lucide-react';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!character) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none overflow-y-auto">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#141414] text-[#e0e0e0] border border-red-900 w-full max-w-4xl shadow-[12px_12px_0px_#991b1b] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Bar */}
        <div className="relative bg-[#0a0a0a] text-white p-6 sm:p-8 flex items-center justify-between border-b border-red-600 shrink-0 overflow-hidden">
          {/* Banner Illustration */}
          {character.imageUrl && (
            <div className="absolute inset-0 z-0 opacity-25">
              <img
                src={character.imageUrl}
                alt={character.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
            </div>
          )}

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-red-500 rounded-lg flex items-center justify-center font-serif font-black text-4xl text-red-500 shrink-0 bg-black overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.5)]">
              {character.imageUrl ? (
                <img
                  src={character.imageUrl}
                  alt={character.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                character.name[0]
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 bg-red-600 text-black font-mono font-bold text-xs uppercase shadow-sm">
                  {character.department}
                </span>
                <span className="text-gray-300 text-xs font-mono bg-black/60 px-2 py-0.5 border border-gray-800">
                  시대: {character.deathEra}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-serif text-white tracking-wider mt-1.5 flex items-center gap-2">
                {character.name} 
                <span className="text-xs sm:text-sm font-normal text-gray-400 font-sans tracking-normal">({character.role})</span>
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 w-10 h-10 bg-[#1c1c1c] hover:bg-red-600 text-gray-300 hover:text-black transition-colors flex items-center justify-center border border-gray-800 shrink-0 font-bold self-start"
            aria-label="모달 닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-serif bg-[#121212]">
          
          {/* Quotes Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {character.quotes.map((quote, idx) => (
              <div key={idx} className="p-4 bg-[#1a1a1a] border border-gray-800 shadow-sm flex items-start gap-3">
                <MessageSquareQuote className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm font-bold italic text-gray-200 leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Lore & Appearance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#181818] p-6 border border-gray-800">
            <div className="md:col-span-8 space-y-3">
              <h4 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 border-b pb-2 border-gray-800 text-white">
                <UserCheck className="w-4 h-4 text-red-500" />
                사신 생전 및 사후 상세 기록록
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-sans">
                {character.detailLore}
              </p>
            </div>

            <div className="md:col-span-4 space-y-4 md:border-l md:pl-6 border-gray-800 font-sans">
              <div>
                <p className="text-[10px] text-red-400 font-mono uppercase tracking-widest font-bold">외모 특이사항</p>
                <p className="text-xs font-bold text-gray-200 mt-1">{character.appearance}</p>
              </div>

              <div>
                <p className="text-[10px] text-red-400 font-mono uppercase tracking-widest font-bold">성격 기질</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {character.personality.map((p, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#222] border border-gray-700 text-xs font-bold text-gray-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] text-red-400 font-mono uppercase tracking-widest font-bold">천명원 분류 태그</p>
                <div className="flex flex-wrap gap-1 mt-1 font-mono">
                  {character.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-red-300 bg-[#2a1212] px-1.5 py-0.5 rounded border border-red-900/50">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MyeongDo (명도) Weapon & Stages */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-red-900/60 pb-2">
              <h4 className="text-lg font-black tracking-tight flex items-center gap-2 text-white">
                <Swords className="w-5 h-5 text-red-500" />
                명도(冥道) 개방 규격 및 전투 체계
              </h4>
              <span className="text-xs font-mono text-gray-500">명계의 길 구슬 연동</span>
            </div>

            {character.myeongdoList && character.myeongdoList.length > 0 ? (
              <div className="space-y-4 font-sans">
                {character.myeongdoList.map((m, idx) => {
                  const isCheon = m.stage === '천(天)';
                  const isJi = m.stage === '지(地)';
                  return (
                    <div 
                      key={idx} 
                      className={`p-5 border transition-all ${
                        isCheon 
                          ? 'bg-[#180808] text-white border-red-600 shadow-[6px_6px_0px_#991b1b]' 
                          : isJi 
                          ? 'bg-[#1a1a1a] border-gray-700 text-gray-200' 
                          : 'bg-[#141414] border-gray-800 text-gray-300'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-serif">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 font-mono text-xs font-black ${
                            isCheon ? 'bg-red-600 text-black' :
                            isJi ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-400'
                          }`}>
                            {m.stage}
                          </span>
                          <h5 className="text-base sm:text-lg font-black tracking-wide text-white">
                            {m.name}
                          </h5>
                        </div>

                        {isCheon && (
                          <span className="text-[10px] font-mono text-red-400 flex items-center gap-1 font-bold">
                            <Sparkles className="w-3.5 h-3.5" /> 최종 심상세계 언령
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                        {m.description}
                      </p>

                      {m.incantation && (
                        <div className={`mt-3 p-3 font-serif italic text-xs border-l-4 ${
                          isCheon ? 'bg-black/80 border-red-600 text-red-300' : 'bg-black/40 border-gray-600 text-gray-300'
                        }`}>
                          <span className="text-[9px] font-mono not-italic uppercase block mb-0.5 text-gray-500">해방 선포 언령:</span>
                          "{m.incantation}"
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 bg-[#181818] border border-gray-800 text-center space-y-2 font-sans">
                <ShieldAlert className="w-8 h-8 text-red-500 mx-auto" />
                <p className="font-bold text-sm text-gray-200">보유 명도(冥道) 없음</p>
                <p className="text-xs text-gray-500">
                  {character.id === 'yeomra' 
                    ? '염라는 존재 자체가 곧 명계이므로 명도 구슬을 쓰지 않습니다.' 
                    : '천명원 연구 실적으로 명도 없이 채용된 특이 인재입니다.'}
                </p>
              </div>
            )}
          </div>

          {/* Euniri Dev Commentary */}
          {character.euniriComment && (
            <div className="p-5 bg-[#0e0e16] border border-[#3a0ca3]/80 rounded relative overflow-hidden font-sans shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a2d2ff] font-bold mb-2">
                <Terminal className="w-4 h-4 text-[#a2d2ff]" />
                <span>DEV_LOG // 시스템 아키텍트 은이리의 코멘트</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-serif leading-relaxed pl-3 border-l-2 border-[#3a0ca3]">
                "{character.euniriComment}"
              </p>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#0a0a0a] p-4 border-t border-gray-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-red-600 text-black font-black text-xs hover:bg-white transition-colors"
          >
            문서 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
