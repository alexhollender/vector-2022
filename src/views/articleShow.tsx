import * as Context from "@/lib/context";
import * as Layout from "@/layout";

export default function ArticleShow() {
  const { articleContent } = Context.useGlobalContext();

  return (
    <Layout.PageLayout>
      <div
        className="mw-body mw-body-content mt-4"
        dangerouslySetInnerHTML={{ __html: articleContent }}
      />
    </Layout.PageLayout>
  );
}
