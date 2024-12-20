export type PageData = {
  content: string;
  tableOfContents: Section[];
};

export type Section = {
  anchor: string;
  line: string;
  toclevel: number;
  children?: Section[];
};

export type ExpandedState = {
  [key: string]: boolean;
};

export type SearchResult = {
  index: number;
  pageid: number;
  title: string;
  description?: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

export type MenuState = {
  mainMenu: {
    isPinned: boolean;
    isOpen: boolean;
  };
  tableOfContents: {
    isPinned: boolean;
    isOpen: boolean;
  };
  toolsMenu: {
    isPinned: boolean;
    isOpen: boolean;
  };
  userMenu: {
    isPinned: boolean;
    isOpen: boolean;
  };
  languageMenu: {
    isPinned: boolean;
    isOpen: boolean;
  };
};

export type RouteType = "article" | "talk";

export type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  custom?: React.ReactNode;
  onClick?: () => void;
};
