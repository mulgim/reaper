import React from 'react';
import { TabType } from '../types';
import { Clock, BellRing, Menu } from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  selectedDept: string | null;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, selectedDept, onMenuClick }) => {
  const getTabName = () => {
    switch (activeTab) {
      case 'main':
        return '데드엔드 컴퍼니 종합 소개 및 지휘관 포털';
      case 'characters':
        return selectedDept ? `주요 인물 기록 — [${selectedDept}]` : '주요 인물 기록록 (핵심 사신 및 지휘부)';
      case 'worldview':
        return '명계 기업 세계관 대백과사전';
      case 'system':
        return '명도 규격 및 전투 체계 백과';
      case 'spirits':
        return '악령 위험 등급 및 토벌 수칙 아카이브';
      case 'proxy':
        return '사신대행 규정 및 개념 총람 (현계 파견 안내)';
      default:
        return '데드엔드 컴퍼니';
    }
  };

  return (
    <header className="h-20 border-b border-[#2d1212] px-4 sm:px-8 flex items-center justify-between bg-[#0a0a0a]/65 backdrop-blur-md sticky top-0 z-10 select-none shadow-sm shrink-0 text-[#e0e0e0]">
      <div className="flex items-center gap-2 sm:gap-10">
        {/* Mobile Menu Open Button */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 text-[#e11d48] hover:bg-[#1a0808] border border-[#7f1d1d]/30 rounded mr-1"
            aria-label="Open sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div>
          <p className="text-[10px] uppercase text-red-500 font-mono font-bold tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 inline-block" />
            열람 중인 사규 문서
          </p>
          <h2 className="text-sm sm:text-lg font-black tracking-tight text-white font-serif mt-0.5 truncate max-w-[180px] xs:max-w-[240px] sm:max-w-none">
            {getTabName()}
          </h2>
        </div>

        <div className="hidden lg:block h-8 w-[1px] bg-[#2a1414]" />

        <div className="hidden md:flex items-center gap-3 bg-[#120808] px-4 py-2 border border-red-950">
          <Clock className="w-4 h-4 text-red-500 animate-pulse" />
          <div>
            <p className="text-[9px] uppercase text-gray-500 font-mono font-bold tracking-widest">
              다음 전체 업무 회의
            </p>
            <p className="text-xs font-bold tracking-tight text-gray-200">
              매주 월요일 09:00 AM <span className="text-red-500 text-[10px] font-normal">(전 부서 서면 보고서 지참 필수)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-300 bg-[#120808] px-3 py-1.5 border border-red-950">
          <BellRing className="w-3.5 h-3.5 text-red-500" />
          <span>현계 파견 사신 정상 가동 중</span>
        </div>

        {/* CEO Yeomra Emblem */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-300">최고 사법 권한</p>
            <p className="text-[9px] font-mono text-red-500 uppercase font-bold">염라 직할 기업</p>
          </div>
          <div className="w-12 h-12 border-2 border-red-600 bg-[#0a0a0a] rounded-full flex items-center justify-center font-black text-xl text-red-500 shadow-[2px_2px_0px_#dc2626] transition-transform hover:scale-105 cursor-pointer" title="데드엔드 컴퍼니 최고 경영자 염라 징표">
            閻
          </div>
        </div>
      </div>
    </header>
  );
};
