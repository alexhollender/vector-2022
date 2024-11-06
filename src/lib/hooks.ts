"use client";

import * as Api from "@/lib/api";
import * as Context from "@/lib/context";
import * as React from "react";
import * as Utils from "@/lib/utils";

export function usePageData(
  articleSlug: string,
  currentLanguage: string,
  routeType: RouteType
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
        const results: SearchResult[] = await Api.searchWiki(
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
