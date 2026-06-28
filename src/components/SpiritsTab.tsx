import React from 'react';
import { Ghost, Skull, Flame, ShieldAlert, AlertTriangle, Sword, ShieldCheck, Sparkles } from 'lucide-react';

export const SpiritsTab: React.FC = () => {
  const spiritGrades = [
    {
      grade: 'RANK 1 // 잡귀 (Minor Spirit)',
      level: '하급 원념 체계',
      color: 'text-gray-400 border-gray-700 bg-[#121215]',
      badge: 'bg-gray-800 text-gray-300',
      description: '이승에 가벼운 미련을 남기고 떠도는 일상적 영혼 파편입니다. 언어 능력이 없으며 본능적으로 어두운 곳을 부유합니다.',
      threat: '일반 인간에게는 가벼운 피로감이나 한기를 주는 수준입니다.',
      action: '일반 사신 및 인도팀 대원이 명도 기본 경지인 인(人) 해방만으로 손쉽게 제압 및 소멸시킬 수 있습니다.'
    },
    {
      grade: 'RANK 2 // 경원귀 (Lesser Wraith)',
      level: '저주 초기 단계',
      color: 'text-[#80ed99] border-[#2b9348]/60 bg-[#0f1912]',
      badge: 'bg-[#1b4332] text-[#80ed99]',
      description: '특정 장소나 물건에 집착하여 약한 폴터가이스트 현상을 일으키는 원귀입니다. 인간의 부정적 감정을 감지하고 몰려듭니다.',
      threat: '장기간 노출된 인간은 정신적 쇠약이나 원인 불명의 급성 질환에 시달리게 됩니다.',
      action: '토벌팀 신입 대원의 실전 전투 훈련 및 호위 교보재로 주로 지정됩니다.'
    },
    {
      grade: 'RANK 3 // 중원귀 (Greater Wraith)',
      level: '자아 형성 및 악의 개방',
      color: 'text-[#a2d2ff] border-[#3a0ca3]/80 bg-[#0f101c]',
      badge: 'bg-[#3a0ca3] text-[#a2d2ff]',
      description: '명백한 언어를 구사하며 인간에 대한 능동적 악의를 드러내는 위험 개체입니다. 주변의 기온을 급격히 떨어뜨리며 생자의 생기를 직접 흡수합니다.',
      threat: '사신 대원이라 할지라도 방심할 경우 심각한 영적 치명상을 입을 수 있습니다.',
      action: '명도의 두 번째 경지인 지(地)를 완벽히 통달한 숙련된 전투 대원의 단독 혹은 2인 파티 파견이 요구됩니다.'
    },
    {
      grade: 'RANK 4 // 악귀 (Arch-Demon)',
      level: '구역 재앙급 대형 원념',
      color: 'text-[#ffb703] border-[#fb8500]/80 bg-[#1f1408]',
      badge: 'bg-[#d45b00] text-[#fff]',
      description: '수십 년 이상의 원한이 응축되어 탄생한 살육 기계입니다. 일대 지역의 영적 결계를 오염시키며 물리적 공간을 왜곡하는 고유의 장벽을 생성합니다.',
      threat: '현계 도시 하나의 행정 통신망과 교통을 麻痺(마비)시키고 수많은 대량 사상자를 낼 수 있습니다.',
      action: '토벌팀 정예 대원 4인 이상으로 구성된 특수 제압 타격대 배치가 필수적입니다.'
    },
    {
      grade: 'RANK 5 // 마귀 (Apex Disaster)',
      level: '명계 규격 외 종말급 대재앙',
      color: 'text-[#ff4d6d] border-[#c9184a] bg-[#220912]',
      badge: 'bg-[#800f2f] text-[#ff758f] shadow-[0_0_10px_#ff0054]',
      description: '수백 년에 걸친 전쟁, 역병, 대학살의 원념이 하나로 결합하여 탄생한 영적 혼돈 그 자체입니다. 존재만으로 현계와 명계의 경계 차원을 붕괴시킵니다.',
      threat: '단독 개체만으로 데드엔드 컴퍼니 지사를 전멸시킬 수 있는 신화적 괴물입니다.',
      action: '전투 대원 수십 명의 결사 협공이 필요하며, 과거 천명원 교본 지침에 따라 명도 천(天) 사용자 호출, 또는 주변 사신 결집이 필수됩니다..'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 sm:p-12 space-y-10 custom-scrollbar">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Banner */}
        <div className="border-b-2 border-[#e11d48] pb-8 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3 py-1 bg-[#881337] text-[#ffe4e6] font-mono text-[11px] uppercase font-bold tracking-[0.2em] shadow-[2px_2px_0px_#4c0519]">
              THREAT-ARCHIVE // 악령 위험 등급록
            </span>
            <span className="text-xs font-mono text-[#ff4d6d] bg-[#4c0519]/60 border border-[#ff4d6d]/40 px-2.5 py-1 rounded flex items-center gap-1.5 animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5 text-[#ff4d6d]" /> 즉각 섬멸 대상 (EXTERMINATE)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight flex items-center gap-3">
            <Ghost className="w-10 h-10 text-[#e11d48] drop-shadow-[0_0_12px_rgba(225,29,72,0.8)]" />
            <span>악령 위험 등급 분류표</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-3 font-serif leading-relaxed pl-1">
            이승에 미련과 짙은 원한을 남긴 채 법망을 벗어나 타락한 괴물, <strong className="text-[#ff4d6d] font-normal">「악령(惡靈)」</strong>의 사내 공식 5대 위험 등급 및 토벌팀 현장 교전 수칙입니다.
          </p>
        </div>

        {/* Overview Box */}
        <div className="bg-[#121216] border border-gray-800 p-6 rounded shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-4 bg-[#e11d48]/15 border border-[#e11d48]/40 rounded-full shrink-0">
            <Skull className="w-8 h-8 text-[#f43f5e]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
              <span>악령 타락 매커니즘</span>
              <span className="text-[10px] font-mono font-normal px-1.5 py-0.2 bg-gray-800 text-gray-400 rounded">CORE_KNOWLEDGE</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              인도팀에 의해 판결팀 재판정으로 인도되어야 할 망자가 현계에 숨어 집착을 키우면 부패하며 악령으로 변이합니다. 악령은 생자의 생기를 뜯어먹으며 급격히 진화하므로 발견 즉시 토벌팀을 파견해 소멸시켜야 합니다.
            </p>
          </div>
        </div>

        {/* 5 Grades Cards List */}
        <div className="space-y-6">
          <h3 className="text-lg font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 border-l-4 border-[#e11d48] pl-3">
            <Sword className="w-5 h-5 text-[#e11d48]" /> 악령 5대 분류 체계
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {spiritGrades.map((spirit, idx) => (
              <div key={idx} className={`p-6 sm:p-8 border rounded transition-all duration-300 relative overflow-hidden shadow-md ${spirit.color}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-gray-800/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 text-[11px] font-mono font-black uppercase rounded tracking-wider ${spirit.badge}`}>
                      {spirit.grade}
                    </span>
                  </div>
                  <span className="text-xs font-serif font-bold text-gray-300">
                    분류 기준: {spirit.level}
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-serif">
                  <div>
                    <span className="text-gray-500 block font-mono text-[11px] mb-1"> 개체 특성 및 행동 양식</span>
                    <p className="text-gray-200">{spirit.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-800/60 bg-black/20 p-3 rounded">
                    <div>
                      <span className="text-[#ff758f] font-mono text-[11px] font-bold block mb-1 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#ff4d6d]" /> 현계 위협도
                      </span>
                      <p className="text-gray-300 text-xs">{spirit.threat}</p>
                    </div>
                    <div>
                      <span className="text-[#80ed99] font-mono text-[11px] font-bold block mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#80ed99]" /> 공식 토벌 지침
                      </span>
                      <p className="text-gray-300 text-xs">{spirit.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-4 bg-[#110d0f] border border-[#e11d48]/30 text-center rounded">
          <p className="text-xs text-gray-400 font-serif">
            ※ 토벌팀 작전 중 마귀급(RANK 5) 이상의 조짐이 감지될 경우 단독 교전을 금지하며 즉시 인도팀장 및 지휘부에 연락하십시오.
          </p>
        </div>

      </div>
    </div>
  );
};
