"use client";

import * as React from "react";

interface GlobalContextType {
  // Content
  articleSlug: string;
  setArticleSlug: (slug: string) => void;
  articleTitle: string;
  setArticleTitle: (title: string) => void;
  articleContent: string;
  setArticleContent: (content: string) => void;
  articleTableOfContents: Section[];
  setArticleTableOfContents: (sections: Section[]) => void;
  talkContent: string;
  setTalkContent: (content: string) => void;
  talkTableOfContents: Section[];
  setTalkTableOfContents: (sections: Section[]) => void;
  toggleMenuPin: (menuName: keyof MenuState) => void;
  toggleMenuOpen: (menuName: keyof MenuState) => void;

  // Route & Language
  routeType: RouteType;
  setRouteType: (type: RouteType) => void;
  language: string;
  setLanguage: (lang: string) => void;

  // Search
  searchResults: SearchResult[];
  setSearchResults: (results: SearchResult[]) => void;
  isSearchResultsVisible: boolean;
  setIsSearchResultsVisible: (visible: boolean) => void;

  // Menu State
  menuState: MenuState;
  setMenuState: React.Dispatch<React.SetStateAction<MenuState>>;
}

const GlobalContext = React.createContext<GlobalContextType | null>(null);

export function WikiProvider({ children }: { children: React.ReactNode }) {
  // Content State
  const [articleSlug, setArticleSlug] = React.useState("");
  const [articleTitle, setArticleTitle] = React.useState("");
  const [articleContent, setArticleContent] = React.useState("");
  const [articleTableOfContents, setArticleTableOfContents] = React.useState<
    Section[]
  >([]);
  const [talkContent, setTalkContent] = React.useState("");
  const [talkTableOfContents, setTalkTableOfContents] = React.useState<
    Section[]
  >([]);

  // Route & Language State
  const [routeType, setRouteType] = React.useState<RouteType>("article");
  const [language, setLanguage] = React.useState("en");

  // Search State
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [isSearchResultsVisible, setIsSearchResultsVisible] =
    React.useState(false);

  // Menu State
  const [menuState, setMenuState] = React.useState<MenuState>({
    mainMenu: {
      isPinned: false,
      isOpen: false,
    },
    tableOfContents: {
      isPinned: true,
      isOpen: true,
    },
    toolsMenu: {
      isPinned: false,
      isOpen: false,
    },
    userMenu: {
      isPinned: false,
      isOpen: false,
    },
    languageMenu: {
      isPinned: false,
      isOpen: false,
    },
  });

  const toggleMenuPin = React.useCallback((menuName: keyof MenuState) => {
    setMenuState((prev) => ({
      ...prev,
      [menuName]: {
        ...prev[menuName],
        isPinned: !prev[menuName].isPinned,
        isOpen: prev[menuName].isPinned ? false : prev[menuName].isOpen,
      },
    }));
  }, []);

  const toggleMenuOpen = React.useCallback((menuName: keyof MenuState) => {
    setMenuState((prev) => ({
      ...prev,
      [menuName]: {
        ...prev[menuName],
        isOpen: !prev[menuName].isOpen,
      },
    }));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        // Content
        articleSlug,
        setArticleSlug,
        articleTitle,
        setArticleTitle,
        articleContent,
        setArticleContent,
        articleTableOfContents,
        setArticleTableOfContents,
        talkContent,
        setTalkContent,
        talkTableOfContents,
        setTalkTableOfContents,

        // Route & Language
        routeType,
        setRouteType,
        language,
        setLanguage,

        // Search
        searchResults,
        setSearchResults,
        isSearchResultsVisible,
        setIsSearchResultsVisible,

        // Menu State
        menuState,
        setMenuState,
        toggleMenuPin,
        toggleMenuOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a WikiProvider");
  }
  return context;
}
