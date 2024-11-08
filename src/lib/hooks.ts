"use client";

import * as Api from "@/lib/api";
import * as Context from "@/lib/context";
import * as React from "react";
import * as Utils from "@/lib/utils";
import * as Types from "@/lib/types";

export function usePageData(
  articleSlug: string,
  currentLanguage: string,
  routeType: Types.RouteType
) {
  const {
    setArticleSlug,
    setArticleTitle,
    setArticleContent,
    setArticleTableOfContents,
    setTalkContent,
    setTalkTableOfContents,
    setLanguage,
    setRouteType,
  } = Context.useGlobalContext();

  // Set all the basic data
  React.useEffect(() => {
    setLanguage(currentLanguage);
    setRouteType(routeType);
    setArticleSlug(articleSlug);
    setArticleTitle(Utils.formatArticleTitle(articleSlug));
  }, [
    currentLanguage,
    routeType,
    articleSlug,
    setLanguage,
    setRouteType,
    setArticleSlug,
    setArticleTitle,
  ]);

  React.useEffect(() => {
    async function fetchPageData() {
      try {
        const pageData = await Api.getPageContents(
          articleSlug,
          currentLanguage,
          routeType
        );

        if (routeType === "article") {
          setArticleContent(pageData.content);
          setArticleTableOfContents(pageData.tableOfContents);
        } else {
          setTalkContent(pageData.content);
          setTalkTableOfContents(pageData.tableOfContents);
        }
      } catch (error) {
        console.error(`Error fetching ${routeType} data:`, error);
      }
    }

    fetchPageData();
  }, [
    articleSlug,
    currentLanguage,
    routeType,
    setArticleContent,
    setArticleTableOfContents,
    setTalkContent,
    setTalkTableOfContents,
  ]);
}

export function useWikiSearch(searchTerm: string) {
  const { setSearchResults, language } = Context.useGlobalContext();

  React.useEffect(() => {
    async function performSearch() {
      try {
        const results: Types.SearchResult[] = await Api.searchWiki(
          searchTerm,
          language
        );
        setSearchResults(results);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      }
    }

    performSearch();
  }, [searchTerm, language, setSearchResults]);
}

export function useActiveSection(sections: Types.Section[]) {
  const [activeSection, setActiveSection] = React.useState<string>("top");

  React.useEffect(() => {
    const getAnchors = (sections: Types.Section[]): string[] =>
      sections.reduce(
        (acc, section) => [
          ...acc,
          section.anchor,
          ...(section.children ? getAnchors(section.children) : []),
        ],
        [] as string[]
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -90% 0px", threshold: 0 }
    );

    ["top", ...getAnchors(sections)].forEach((anchor) => {
      const element = document.getElementById(anchor);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const isSectionActive = React.useCallback(
    (section: Types.Section): boolean =>
      section.anchor === activeSection ||
      (section.children?.some((child) => isSectionActive(child)) ?? false),
    [activeSection]
  );

  return { activeSection, isSectionActive };
}

export function useBelowTop() {
  const [isBelowTop, setIsBelowTop] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsBelowTop(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    const topElement = document.getElementById("top");
    if (topElement) {
      observer.observe(topElement);
    }

    return () => observer.disconnect();
  }, []);

  return isBelowTop;
}
