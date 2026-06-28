export type TabType = 'main' | 'characters' | 'worldview' | 'system' | 'spirits' | 'proxy';

export type Department = 
  | '토벌팀'
  | '판결팀'
  | 'CEO 직할'
  | '총무팀'
  | '구내식당'
  | '개발팀'
  | '인도팀';

export type DeathEra = '삼국시대' | '조선시대' | '근대' | '현대' | '불명';

export interface MyeongDoStage {
  stage: '인(人)' | '지(地)' | '천(天)';
  name: string;
  description: string;
  incantation?: string; // 언령 (천 해방 시 혹은 지 해방 시 대사)
}

export interface Character {
  id: string;
  name: string;
  role: string;
  department: Department;
  deathEra: DeathEra;
  personality: string[];
  quotes: string[];
  appearance: string;
  tags: string[];
  myeongdoList?: MyeongDoStage[];
  detailLore: string;
  imageUrl?: string;
  colorTheme: {
    border: string;
    bg: string;
    text: string;
    glow: string;
  };
  euniriComment?: string;
}

export interface LoreCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    highlight?: string;
  }[];
}

export interface NewsItem {
  id: string;
  timestamp: string;
  category: '긴급' | '공지' | '개발INFO' | '식당' | '토벌';
  title: string;
  content: string;
  author: string;
}
