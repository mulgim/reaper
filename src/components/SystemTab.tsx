import React from 'react';
import { Sparkles, ShieldAlert, Swords, Zap, Activity, Shield } from 'lucide-react';

export const SystemTab: React.FC = () => {
  return (
    <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-transparent text-[#e0e0e0] select-none">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="border-b border-[#7f1d1d]/80 pb-6">
          <span className="px-2.5 py-1 bg-[#7f1d1d] text-white font-mono text-[10px] uppercase font-black tracking-[0.25em]">
            Combat System // 절대 무력 체계
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif mt-3 text-white tracking-tight">
            명도(冥道) 규격 및 천인극반(天人極盤) 매트릭스
          </h2>
          <p className="text-xs text-gray-400 mt-1 font-sans">
            데드엔드 컴퍼니 대원들의 핵심 영적 전투 체계와 사후 능력 발현 총람
          </p>
        </div>

        {/* Section 1: Myeongdo 3 Stages */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-[#e11d48]">
            <Swords className="w-5 h-5" />
            <h3 className="text-lg font-black font-serif tracking-wide text-white">
              명도(冥道) 3단계 진화 체계
            </h3>
          </div>
          
          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            사신으로 되살아날 때 심장에 부여받는 흰색 구슬에서 자신만의 고유한 영적 무장인 "명도"를 끌어냅니다. 
            명도는 사용자의 성장과 정신적 숙련도에 따라 <strong className="text-[#f43f5e]">인(人) &gt; 지(地) &gt; 천(天)</strong>의 3단계로 진화합니다.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Stage 1 */}
            <div className="bg-[#141414] border border-gray-800 p-6 flex flex-col justify-between hover:border-gray-600 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-gray-800 text-gray-300 font-mono text-xs font-black">
                    1단계: 인(人)
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">기본 무구 형태</span>
                </div>
                <h4 className="text-base font-bold text-white font-serif">단일 한자 무장</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  심장의 흰 구슬이 무구나 원소 형태로 발현되는 기초 규격입니다. 명도의 이름은 한자 단 한 글자로 이루어집니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-850 font-mono text-[10px] text-gray-500">
                예: 염(炎), 참(斬), 멸(滅), 호(護)
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#141414] border border-gray-800 p-6 flex flex-col justify-between hover:border-red-900/60 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#450a0a] text-red-300 font-mono text-xs font-black border border-[#7f1d1d]/60">
                    2단계: 지(地)
                  </span>
                  <span className="text-[10px] font-mono text-red-400">힘의 확장 및 호명</span>
                </div>
                <h4 className="text-base font-bold text-white font-serif">두 글자 연쇄 확장</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  기본형 인(人)의 한 글자에 새로운 글자를 이어붙여 힘을 증폭하거나 다채로운 응용을 보입니다. 천명원 정식 졸업 및 사신 임관 필수 조건입니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-850 bg-[#1c0b0b] p-2.5 border border-[#7f1d1d]/40 font-serif italic text-xs text-red-300">
                해방 언령: "개(開). [지의 명칭]"
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-[#180808] border border-[#991b1b] p-6 flex flex-col justify-between shadow-[8px_8px_0px_#450a0a] relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Sparkles className="w-40 h-40 text-red-500" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#991b1b] text-white font-mono text-xs font-black shadow-sm">
                    3단계 최종 경지: 천(天)
                  </span>
                  <Sparkles className="w-4 h-4 text-[#f43f5e] animate-pulse" />
                </div>
                <h4 className="text-base font-black text-white font-serif">심상세계 강제 구현</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  명계 전체에서도 극소수의 정예 사신만 도달한 절대 경지입니다. 자신의 영혼이 걸어온 길을 상징하는 고유의 함축적 '언령'을 읊어 현실 공간에 자신만의 지옥이나 영역을 전개합니다.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-red-900/60 relative z-10 bg-black/60 p-2.5 border border-red-600/50 font-serif italic text-xs text-[#f43f5e]">
                선포 조건: 고유의 함축 문장(언령) 읊기 필수
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Cheon-In-Geuk-Ban Matrix */}
        <section className="space-y-6 pt-6 border-t border-[#1c1c1c]">
          <div className="flex items-center gap-2 text-[#e11d48]">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="text-lg font-black font-serif tracking-wide text-white">
              천인극반(天人極盤) 전투 매트릭스 척도
            </h3>
          </div>

          <p className="text-xs text-gray-300 font-sans leading-relaxed">
            천명원에서는 사신들의 영적 무력과 생존 능력을 네 가지 핵심 지표로 엄격히 정량화합니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-[#121212] p-6 border border-[#222] space-y-3">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-[#f43f5e] flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> 천 (天 : 천기 에너지)
                </span>
                <span className="text-gray-500">영적 출력 척도</span>
              </div>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                육체와 별개로 존재하는 신비한 영적 에너지(氣)입니다. 명도 개방과 전투 스킬의 위력에 결정적인 영향을 미치며, 격렬한 전투 시 소모되고 부활 시 치명상 복구에 쓰입니다.
              </p>
              <div className="h-1.5 bg-[#222] w-full overflow-hidden">
                <div className="h-full bg-[#e11d48] w-[92%]" />
              </div>
            </div>

            <div className="bg-[#121212] p-6 border border-[#222] space-y-3">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-orange-400 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" /> 인 (人 : 물리 육체력)
                </span>
                <span className="text-gray-500">신체 파괴력 척도</span>
              </div>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                사신이 부여받은 전성기 육체 자체의 순수한 물리적 강함과 근접 타격 능력을 뜻합니다. 천기가 고갈되었을 때 최후의 생존을 결정짓는 깡피지컬 영역입니다.
              </p>
              <div className="h-1.5 bg-[#222] w-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[85%]" />
              </div>
            </div>

            <div className="bg-[#121212] p-6 border border-[#222] space-y-3">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-rose-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 극 (極 : 감각 인지력)
                </span>
                <span className="text-gray-500">초간극 회피 척도</span>
              </div>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                상대의 살기와 사각지대를 정밀하게 간파하고 찰나의 순간에 절명기를 인지 및 회피하는 초감각 능력입니다. 토벌팀 랭커들이 가장 중시하는 스탯입니다.
              </p>
              <div className="h-1.5 bg-[#222] w-full overflow-hidden">
                <div className="h-full bg-rose-500 w-[95%]" />
              </div>
            </div>

            <div className="bg-[#180808] p-6 border border-[#7f1d1d]/60 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span className="text-amber-500 flex items-center gap-1.5 font-black">
                  <Sparkles className="w-4 h-4" /> 반 (盤 : 영혼 조화율)
                </span>
                <span className="text-red-400 font-bold">최종 언령 조건</span>
              </div>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                천·인·극 세 가지 역량을 하나의 영혼 안에서 완벽히 조화시키는 미스터리한 힘입니다. 오직 '반'이 일정 수준 이상 도달해야만 명도 최종 경지 천(天)의 언령을 읊을 수 있습니다.
              </p>
              <div className="h-1.5 bg-[#2a1212] w-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[80%]" />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
