"use client";

import * as Hooks from "@/lib/hooks";
import * as Utils from "@/lib/utils";
import { useParams } from "next/navigation";
import TalkShow from "@/views/talkShow";

export default function ArticlePage() {
  const params = useParams();
  const articleSlug = Utils.decodeSlug(params.article as string);

  Hooks.usePageData(articleSlug, "talk");

  return <TalkShow />;
}
