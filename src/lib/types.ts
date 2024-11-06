interface PageData {
  content: string;
  tableOfContents: Section[];
}

interface Section {
  anchor: string;
  line: string;
  toclevel: number;
  children?: Section[];
}

interface SearchResult {
  pageid: number;
  title: string;
  description?: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

interface MenuState {
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
}

type RouteType = "article" | "talk";
