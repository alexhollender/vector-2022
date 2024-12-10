"use client";

import * as React from "react";
import * as Hooks from "@/lib/hooks";
import * as Utils from "@/lib/utils";
import * as Context from "@/lib/context";
import { useParams, useSearchParams } from "next/navigation";
import ArticleShow from "@/views/articleShow";

export default function ArticlePage() {
  const params = useParams();
  const articleSlug = Utils.decodeSlug(params.article as string);
  const searchParams = useSearchParams();
  const { setLanguage } = Context.useGlobalContext();

  const languageParam: string | null = searchParams.get("lang");

  React.useEffect(() => {
    if (languageParam) {
      setLanguage(languageParam);
    }
  }, [languageParam, setLanguage]);

  Hooks.usePageData(articleSlug, "article");

  return <ArticleShow />;
}
