/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TabType, Character } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainTab } from './components/MainTab';
import { CharactersTab } from './components/CharactersTab';
import { WorldviewTab } from './components/WorldviewTab';
import { SystemTab } from './components/SystemTab';
import { SpiritsTab } from './components/SpiritsTab';
import { ReaperProxyTab } from './components/ReaperProxyTab';
import { HanjaRain } from './components/HanjaRain';
import { FooterTicker } from './components/FooterTicker';
import { CharacterModal } from './components/CharacterModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('main');
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [modalCharacter, setModalCharacter] = useState<Character | null>(null);

  return (
    <div className="h-screen w-full bg-[#070707] text-[#e0e0e0] flex flex-col md:flex-row font-serif select-none border-4 sm:border-8 border-[#161616] overflow-hidden relative">
      <HanjaRain />
      
      {/* 1. Left Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
      />

      {/* 2. Main Right Viewport */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-full bg-[#0d0d0d]/40 backdrop-blur-[1px]">
        
        {/* Top Sticky Header */}
        <Header activeTab={activeTab} selectedDept={selectedDept} />

        {/* Dynamic Viewport Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'main' && (
            <MainTab
              setActiveTab={setActiveTab}
              setSelectedCharacter={setModalCharacter}
              setSelectedDept={(dept) => {
                setSelectedDept(dept);
                setActiveTab('characters');
              }}
            />
          )}

          {activeTab === 'characters' && (
            <CharactersTab
              selectedDept={selectedDept}
              setSelectedDept={setSelectedDept}
              onSelectCharacter={setModalCharacter}
            />
          )}

          {activeTab === 'worldview' && <WorldviewTab />}
          {activeTab === 'system' && <SystemTab />}
          {activeTab === 'spirits' && <SpiritsTab />}
          {activeTab === 'proxy' && <ReaperProxyTab />}
        </div>

        {/* Bottom News Ticker */}
        <FooterTicker />
      </main>

      {/* 3. Vertical Decorative Background Text (Geometric Aesthetic) */}
      <div
        className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-5 flex-col gap-10 text-white font-black uppercase text-2xl z-0 tracking-widest select-none"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span>DEAD END COMPANY</span>
        <span className="text-[#c2a878]">REAPER PORTAL</span>
        <span>MORTAL LIMITS</span>
      </div>

      {/* 4. Character Detail Modal */}
      <CharacterModal
        character={modalCharacter}
        onClose={() => setModalCharacter(null)}
      />
    </div>
  );
}

