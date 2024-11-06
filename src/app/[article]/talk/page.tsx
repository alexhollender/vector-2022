"use client";

import * as Hooks from "@/lib/hooks";
import * as Utils from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";
import TalkShow from "../../../views/talkShow";

export default function ArticlePage() {
  const params = useParams();
  const articleSlug = Utils.decodeSlug(params.article as string);
  const searchParams = useSearchParams();
  const language = searchParams.get("lang") || "en";

  Hooks.usePageData(articleSlug, language, "talk");

  return <TalkShow />;
}
