import React, { useState } from 'react';
import { WORLDVIEW_CATEGORIES } from '../data/worldview';
import { BookOpen, Sparkles, Building2, Network, ShieldAlert, Watch, Skull, ChevronRight } from 'lucide-react';

export const WorldviewTab: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(WORLDVIEW_CATEGORIES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Network': return Network;
      case 'ShieldAlert': return ShieldAlert;
      case 'Watch': return Watch;
      case 'Skull': return Skull;
      default: return Sparkles;
    }
  };

  const selectedLore = WORLDVIEW_CATEGORIES.find((c) => c.id === activeCategory) || WORLDVIEW_CATEGORIES[0];

  return (
    <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-transparent text-[#e0e0e0]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Title Header */}
        <div className="border-b border-red-900/60 pb-4">
          <span className="px-2.5 py-1 bg-red-600 text-black font-mono text-[10px] uppercase font-bold tracking-widest">
            Dead End Encyclopedia
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-serif mt-3 text-white">
            데드엔드 컴퍼니 세계관 백과사전
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            21세기 사후세계 기업화 시스템의 체계
          </p>
        </div>

        {/* Geometric Balance Layout: Sidebar Index + Content Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 select-none">
          
          {/* Category Selector List (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold px-1 mb-2">
              세계관 소문자 차림표
            </p>
            <div className="space-y-2">
              {WORLDVIEW_CATEGORIES.map((cat, idx) => {
                const IconComponent = getIcon(cat.icon);
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left p-4 transition-all border flex items-center justify-between font-serif group ${
                      isActive
                        ? 'bg-[#180808] text-white border-red-600 shadow-[6px_6px_0px_#991b1b] translate-x-1'
                        : 'bg-[#141414] text-gray-300 border-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-red-500' : 'text-gray-500'}`}>
                        0{idx + 1}.
                      </span>
                      <IconComponent className={`w-5 h-5 shrink-0 ${isActive ? 'text-red-500' : 'text-gray-500'}`} />
                      <div>
                        <h4 className="font-bold text-sm leading-tight text-white">{cat.title}</h4>
                        <p className={`text-[10px] mt-0.5 font-sans ${isActive ? 'text-red-300' : 'text-gray-500'}`}>
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-red-500 rotate-90' : 'text-gray-600 group-hover:translate-x-1'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Lore Quote Box */}
            <div className="p-4 bg-[#141414] border border-gray-800 mt-6 shadow-sm">
              <p className="text-[10px] text-red-500 font-mono uppercase tracking-widest font-bold">절대 사규 기밀</p>
              <p className="text-xs font-serif italic text-gray-300 mt-2 leading-relaxed">
                "평범한 인간은 죽기 직전의 빈사 상태까지 가야만 사신과 악령을 볼 수 있다. 만약 외출 중인 사신을 눈치챈 일반인이 있다면 그 즉시 기억 소거반을 투입하라."
              </p>
            </div>
          </div>

          {/* Content Viewport (Col 8) */}
          <div className="lg:col-span-8 bg-[#141414] border border-gray-800 p-6 sm:p-8 shadow-[8px_8px_0px_#991b1b] space-y-8 font-serif">
            
            {/* Header Description */}
            <div className="border-b border-gray-800 pb-6">
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase mb-1">
                <BookOpen className="w-4 h-4" />
                항목 상세 아카이브
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedLore.title}
              </h2>
              <p className="text-xs font-sans text-gray-400 mt-1 font-medium">
                {selectedLore.subtitle}
              </p>

              <div className="mt-4 p-4 bg-[#1a1a1a] border-l-4 border-red-600 text-xs sm:text-sm leading-relaxed text-gray-200 font-sans font-medium">
                {selectedLore.summary}
              </div>
            </div>

            {/* Sub Sections */}
            <div className="space-y-6 font-sans">
              {selectedLore.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-bold text-white font-serif flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 inline-block rotate-45" />
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-4 border-l border-gray-800">
                    {sec.content}
                  </p>
                  
                  {sec.highlight && (
                    <div className="ml-4 mt-2 px-3 py-1.5 bg-[#2a1212] text-red-400 text-xs font-mono font-bold inline-block border border-red-900">
                      ★ 규정 강조: {sec.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Visual Footer stamp */}
            <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-500">
              <span>DEAD END COMPANY ARCHIVE DEPT.</span>
              <span className="text-red-500 font-bold">VERIFIED BY YON-GARAM</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
