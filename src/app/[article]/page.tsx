import { redirect } from "next/navigation";

interface Props {
  params: {
    article: string;
  };
}

export default function ArticleRedirect({ params: { article } }: Props) {
  redirect(`/wiki/${article}`);
}
