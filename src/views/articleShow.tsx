import * as Context from "@/lib/context";
import * as Layout from "@/layout";
import * as Ui from "@/ui";

export default function ArticleShow() {
  const { articleContent } = Context.useGlobalContext();

  return (
    <>
      <Ui.Header />
      <Layout.Grid
        leftSidebar={<Ui.LeftSidebar />}
        rightSidebar={<Ui.RightSidebar />}
      >
        <Ui.ArticleHeader />
        <Ui.ArticleToolbar />
        <Ui.ArticleMetadata />
        {/* Article page content */}
        <div
          className="mw-body mw-body-content mt-4"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
      </Layout.Grid>
    </>
  );
}
