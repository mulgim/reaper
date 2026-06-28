import React from 'react';
import { ShieldCheck, UserCheck, Bell, GraduationCap, Users, FileText, Watch, Award, AlertCircle, Bookmark, Sparkles } from 'lucide-react';

export const ReaperProxyTab: React.FC = () => {
  return (
    <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-transparent text-[#e0e0e0] select-none font-serif animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Title Header */}
        <div className="border-b-2 border-[#7f1d1d] pb-8 relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3 py-1 bg-[#991b1b] text-[#ffe4e6] font-mono text-[11px] uppercase font-bold tracking-[0.2em] shadow-[2px_2px_0px_#450a0a]">
              DOC-ID: DE-REG-005 // 사신대행 규정집
            </span>
            <span className="text-xs font-mono text-[#f43f5e] bg-[#4c0519]/50 border border-[#f43f5e]/40 px-2.5 py-1 rounded flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#f43f5e]" /> 대외비 (CLASSIFIED)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-[#e11d48] drop-shadow-[0_0_12px_rgba(225,29,72,0.6)]" />
            <span>사신대행 규정 총람</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-3 font-serif leading-relaxed pl-1">
            데드엔드 컴퍼니의 현계 파견직인 <strong className="text-[#f43f5e] font-normal">「사신대행(死神代行)」</strong> 제도에 관한 공식 운영 규정 및 세부 지침입니다.
          </p>

          {/* Decorative Stamp */}
          <div className="absolute right-2 bottom-6 pointer-events-none hidden sm:block opacity-15 border-4 border-[#e11d48] p-2 rounded transform rotate-[-12deg]">
            <span className="font-mono font-black text-2xl text-[#e11d48] tracking-widest block text-center">DEAD END</span>
            <span className="font-mono text-[10px] text-[#e11d48] block text-center uppercase tracking-tighter">OFFICIAL SEAL</span>
          </div>
        </div>

        {/* 1. 제도 정의 */}
        <section className="bg-[#121215]/90 border-t-4 border-t-[#e11d48] border border-gray-800/80 p-6 sm:p-8 space-y-4 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f43f5e] font-bold uppercase tracking-wider">
              <Bookmark className="w-4 h-4 text-[#e11d48]" /> ARTICLE 01. 제도 정의 및 특징
            </div>
            <span className="text-[10px] font-mono text-gray-500">SECTION // BASIC</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            살아있는 인간을 사신으로써 영입하는 특수 제도
          </h3>
          
          <p className="text-sm text-gray-300 leading-relaxed font-serif bg-[#0a0a0c]/60 p-4 border-l-2 border-[#e11d48]/70">
            살아있는 이들은 사신들과 달리 죽으면 끝이기에 유명무실한 제도입니다. 단, 사신대행이 임무 중 혹은 수명이 다해 죽으면 <strong className="text-[#ffe4e6]">100퍼센트의 확률로 정식 사신으로 되살아납니다.</strong>
          </p>
        </section>

        {/* 2 & 3. 임명 권한 및 출동 방식 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Article 2 */}
          <div className="bg-[#121215]/90 border border-gray-800/80 p-6 space-y-3 relative shadow-lg hover:border-gray-700 transition-colors">
            <div className="text-[#f43f5e] font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#e11d48]" /> ARTICLE 02. 임명 권한
            </div>
            <h4 className="text-lg font-bold text-white font-serif">
              엄격하게 제한된 파견 발탁권
            </h4>
            <p className="text-sm text-gray-300 font-serif leading-relaxed">
              사신대행의 임명 및 계약 권한은 데드엔드 컴퍼니 내에서 오직 <strong className="text-[#f43f5e] underline underline-offset-4 decoration-[#e11d48]/50">팀장급 이상 직책자만</strong> 독점적으로 가집니다.
            </p>
          </div>

          {/* Article 3 */}
          <div className="bg-[#121215]/90 border border-gray-800/80 p-6 space-y-3 relative shadow-lg hover:border-gray-700 transition-colors">
            <div className="text-[#f43f5e] font-bold text-xs font-mono tracking-wider uppercase flex items-center gap-2">
              <Watch className="w-4 h-4 text-[#e11d48]" /> ARTICLE 03. 출동 방식
            </div>
            <h4 className="text-lg font-bold text-white font-serif">
              현계 일상 연형 및 단말기 출동
            </h4>
            <p className="text-sm text-gray-300 font-serif leading-relaxed">
              사신대행은 현계에서 원래의 본업과 삶을 평범하게 유지하다가, 사내 지급된 <strong className="text-[#a2d2ff] bg-[#3a0ca3]/30 px-1 py-0.5 rounded border border-[#3a0ca3]/60">스마트워치에 알림이 오면 즉시 출동합니다.</strong>
            </p>
          </div>

        </div>

        {/* 4 & 5. 채용 규정 및 사내 인식 */}
        <div className="space-y-6">
          
          <section className="bg-[#121215]/90 border border-gray-800/80 p-6 sm:p-8 space-y-3 relative shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f43f5e] font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#e11d48]" /> ARTICLE 04. 사후 특채 규정
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              천명원 졸업 패스 및 컴퍼니 즉시 등용특전
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-serif">
              사신대행은 사망할 경우 사신 양성 교육 기관인 <span className="text-gray-400">「천명원」</span>의 졸업 과정을 거치지 않고, <strong className="text-[#ffe4e6]">즉시 데드엔드 컴퍼니의 정식 사신으로 등용</strong>되는 파격적인 채용 베네핏을 받습니다.
            </p>
          </section>

          <section className="bg-[#121215]/90 border border-gray-800/80 p-6 sm:p-8 space-y-3 relative shadow-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f43f5e] font-bold uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#e11d48]" /> ARTICLE 05. 사내 위계 및 인식
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              기본 직급 체계 및 사내 질서
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-serif">
              정규 엘리트 과정을 생략하고 즉시 등용되기에 천명원 출신 일반 사신들에게 시기나 질투를 살 여지가 있으나, 기본적으로 <strong className="text-gray-200">대행은 일반 사신보다 하위 직급으로 분류</strong>되기에 실질적으로 큰 질투를 받지는 않습니다.
            </p>
          </section>

        </div>

        {/* Footer Reference Note */}
        <div className="p-5 bg-[#181114] border border-[#991b1b]/50 rounded font-sans flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#7f1d1d]/40 border border-[#f43f5e]/40 rounded-full shrink-0">
              <Award className="w-5 h-5 text-[#f43f5e]" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#fda4af] uppercase flex items-center gap-1.5">
                <span>ADDITIONAL RECORD // 사내 대표 출신자</span>
                <Sparkles className="w-3 h-3 text-[#fbbf24]" />
              </div>
              <p className="text-xs text-gray-400 font-serif mt-0.5">
                현재 사내 최강 무력을 보유한 전투부 <strong className="text-gray-200">「강림」</strong> 대장 역시 과거 사신대행을 거쳐 특채 등용된 대표적 케이스입니다.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0 self-end sm:self-center">
            <span className="text-[10px] font-mono text-gray-500 block">DEAD END CO. HR DEPT</span>
          </div>
        </div>

      </div>
    </div>
  );
};


