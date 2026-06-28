import React from 'react';
import { CHARACTERS } from '../data/characters';
import { NEWS_ITEMS } from '../data/news';
import { TabType, Character } from '../types';
import { Compass, Skull, Sparkles, FileText, ChevronRight, Users, ArrowRight } from 'lucide-react';

interface MainTabProps {
  setActiveTab: (tab: TabType) => void;
  setSelectedCharacter: (char: Character) => void;
  setSelectedDept: (dept: string | null) => void;
}

export const MainTab: React.FC<MainTabProps> = ({
  setActiveTab,
  setSelectedCharacter,
  setSelectedDept,
}) => {
  return (
    <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-transparent text-[#e0e0e0]">
      <div className="max-w-5xl mx-auto space-y-12 select-none">
        
        {/* Minimalist Hero Banner */}
        <section className="border-b border-[#7f1d1d]/60 pb-10 space-y-6 pt-2">
          <div className="flex items-center gap-2 text-[#e11d48] font-mono text-xs uppercase tracking-[0.3em] font-bold">
            <span className="w-2 h-2 bg-[#881337] inline-block" />
            Official Portal // 명계 사법 기관
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            데드엔드 컴퍼니<br />
            <span className="text-gray-300 font-serif text-xl sm:text-3xl block mt-3 font-bold">
              망자의 안식과 명계의 절대 규범
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-400 font-serif leading-relaxed max-w-3xl">
            본사는 염라대왕의 사후세계 정비 프로젝트로 출범한 명계 유일의 기업형 사법 기관입니다. 
            현계에서 강렬한 집념을 지니고 눈을 감은 주요 인물들이 명계와 현계의 균형을 수호합니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('characters')}
              className="px-6 py-3 bg-[#7f1d1d] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#991b1b] transition-all flex items-center gap-2 shadow-lg"
            >
              <Users className="w-4 h-4" /> 주요 인물 기록 열람 <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('worldview')}
              className="px-6 py-3 bg-[#141414] border border-[#7f1d1d]/50 text-gray-300 font-bold text-xs tracking-widest uppercase hover:border-[#991b1b] hover:text-white transition-all"
            >
              세계관 대백과사전
            </button>
          </div>
        </section>

        {/* Core Pillars (3 Clean Cards) */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#e11d48] font-bold">
            01. CORE MISSIONS // 핵심 3대 직무
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#121212] p-6 border border-[#2a1212] hover:border-[#7f1d1d] transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#450a0a] text-[#f43f5e] border border-[#7f1d1d] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-white">망자 인도</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                현계에서 수명을 다하거나 예기치 못한 사건으로 사망한 영혼들을 명계 심판대로 안전하게 호송합니다.
              </p>
            </div>

            <div className="bg-[#121212] p-6 border border-[#2a1212] hover:border-[#7f1d1d] transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#450a0a] text-[#f43f5e] border border-[#7f1d1d] flex items-center justify-center">
                <Skull className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-white">악령 토벌</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                법망을 벗어나 현계에 질병과 혼란을 일으키는 악령들을 즉각 처단하고 봉인합니다.
              </p>
            </div>

            <div className="bg-[#121212] p-6 border border-[#2a1212] hover:border-[#7f1d1d] transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#450a0a] text-[#f43f5e] border border-[#7f1d1d] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-white">윤회 판결</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                망자의 생전 업보를 엄정하게 판결해 지옥 형벌 혹은 다음 생의 행선지를 판결합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Minimalist Notices & Department Roster shortcuts */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#1c1c1c]">
          
          {/* Department Shortcuts (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#e11d48] font-bold">
              02. DEPARTMENTS // 소속 부서 편제
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {['토벌팀', '인도팀', '판결팀', '개발팀'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => { setSelectedDept(dept); setActiveTab('characters'); }}
                  className="p-4 bg-[#141414] border border-[#2a1414] hover:border-[#7f1d1d] hover:bg-[#1f0a0a] text-left transition-all group"
                >
                  <span className="text-sm font-bold font-serif text-gray-200 group-hover:text-white block">{dept}</span>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#f43f5e] flex items-center justify-between mt-2">
                    소속 사신 <ChevronRight className="w-3 h-3" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Clean Notice Board (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#e11d48] font-bold flex items-center gap-2">
                <FileText className="w-4 h-4" /> 03. BULLETIN // 최근 사내 지시
              </h2>
              <span className="text-[11px] text-gray-500 font-mono">기밀 보안 규정</span>
            </div>

            <div className="divide-y divide-[#1c1c1c] bg-[#121212] border border-[#1c1c1c]">
              {NEWS_ITEMS.slice(0, 3).map((item) => (
                <div key={item.id} className="p-4 hover:bg-[#161616] transition-colors flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 font-bold ${
                        item.category === '긴급' ? 'bg-[#7f1d1d] text-white' : 'bg-[#222] text-gray-400'
                      }`}>
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold font-serif text-gray-200">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-gray-400 font-sans line-clamp-1">{item.content}</p>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 shrink-0 mt-0.5">{item.timestamp}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
