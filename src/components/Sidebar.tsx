import React from 'react';
import { TabType } from '../types';
import { Shield, Users, BookOpen, Sparkles, Building2, Swords, ShieldCheck, Ghost } from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  selectedDept: string | null;
  setSelectedDept: (dept: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedDept,
  setSelectedDept,
}) => {
  const menuItems = [
    { id: 'main' as TabType, label: '01. 회사 소개 및 메인', icon: Building2 },
    { id: 'characters' as TabType, label: '02. 주요 인물 기록록', icon: Users },
    { id: 'worldview' as TabType, label: '03. 명계 세계관 백과', icon: BookOpen },
    { id: 'system' as TabType, label: '04. 명도 및 전투 체계', icon: Swords },
    { id: 'spirits' as TabType, label: '05. 악령 위험 등급록', icon: Ghost },
    { id: 'proxy' as TabType, label: '06. 사신대행 명부', icon: ShieldCheck },
  ];

  const depts = ['토벌팀', '인도팀', '판결팀', '총무팀', '개발팀', '구내식당', 'CEO 직할'];

  return (
    <nav className="w-64 bg-[#0a0a0a]/75 backdrop-blur-md text-gray-200 h-full flex flex-col justify-between p-6 border-r border-[#2d1212] select-none shrink-0 shadow-2xl z-20 overflow-y-auto">
      <div className="space-y-8">
        {/* Company Brand Header */}
        <div className="border-b border-[#7f1d1d]/80 pb-5">
          <div className="flex items-center gap-2 mb-2 text-[#e11d48]">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold">Dead End Co.</span>
          </div>
          <h1 className="text-white text-2xl font-black tracking-widest leading-tight font-serif">
            데드엔드<br />
            <span className="text-[#991b1b]">컴퍼니</span>
          </h1>
          <p className="text-[10px] text-gray-400 mt-2 tracking-[0.15em] font-medium">
            현대화된 명계(冥界) 기업 사신
          </p>
        </div>

        {/* Main Navigation Tabs */}
        <div className="space-y-2">
          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mb-3 px-2">
            지휘 통제 차림표
          </p>
          <ul className="space-y-2 text-sm font-bold tracking-wider">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.id !== 'characters') setSelectedDept(null);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-all duration-200 border ${
                      isActive
                        ? 'bg-[#1c0808] text-[#e11d48] border-[#7f1d1d] translate-x-1 shadow-[4px_4px_0px_#7f1d1d]'
                        : 'text-gray-400 border-transparent hover:text-white hover:bg-[#141414]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 transition-transform duration-300 ${
                        isActive ? 'bg-[#991b1b] rotate-45 scale-125' : 'bg-gray-600'
                      }`}
                    />
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs uppercase tracking-widest">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Department Quick Filter */}
        <div className="pt-4 border-t border-gray-900 space-y-3">
          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] px-2 flex items-center justify-between">
            <span>부서별 사신 검색</span>
            {selectedDept && (
              <button 
                onClick={() => setSelectedDept(null)}
                className="text-[#f43f5e] hover:underline text-[9px]"
              >
                전체보기
              </button>
            )}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {depts.map((dept) => {
              const isSelected = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => {
                    setSelectedDept(isSelected ? null : dept);
                    if (activeTab !== 'characters') setActiveTab('characters');
                  }}
                  className={`text-[10px] px-2.5 py-1 transition-all border font-serif ${
                    isSelected
                      ? 'bg-[#7f1d1d] text-white font-black border-[#991b1b] shadow-[2px_2px_0px_#450a0a]'
                      : 'bg-[#121212] text-gray-400 border-gray-800 hover:border-[#7f1d1d] hover:text-gray-200'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* System Status Ticker */}
      <div className="bg-[#120808] p-4 border border-[#7f1d1d]/50 mt-6 shadow-inner">
        <div className="flex items-center gap-2 mb-2 text-gray-400">
          <Shield className="w-3.5 h-3.5 text-[#e11d48]" />
          <p className="text-[10px] font-mono tracking-wider font-bold text-[#f43f5e]">천명 사법 체계 가동</p>
        </div>
        <div className="flex justify-between items-center bg-[#0a0a0a] p-2 border border-[#450a0a]">
          <span className="text-xs font-bold text-gray-300 tracking-tight">명계 게이트 상태</span>
          <span className="text-[11px] text-[#e11d48] font-bold flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#e11d48] inline-block" />
            정상 보안 중
          </span>
        </div>
        <p className="text-[9px] text-gray-500 mt-2 text-center font-mono">
          현계 기밀 유지 필수 // 월간 실적 검토
        </p>
      </div>
    </nav>
  );
};
