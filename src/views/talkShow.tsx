import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Layout from "@/layout";

export default function ArticleShow() {
  const { talkContent } = Context.useGlobalContext();

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
        {/* Talk page content */}
        <div
          className="mw-body mw-body-content mt-4"
          dangerouslySetInnerHTML={{ __html: talkContent }}
        />
      </Layout.Grid>
    </>
  );
}
