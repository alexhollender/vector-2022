import * as Context from "@/lib/context";
import * as Layout from "@/layout";
import * as Ui from "@/ui";

export default function ArticleShow() {
  const { articleContent } = Context.useGlobalContext();

  return (
    <>
      <Ui.Header />
      <Ui.StickyHeader />
      <Layout.Grid
        leftSidebar={<Ui.LeftSidebar />}
        rightSidebar={<Ui.RightSidebar />}
      >
        <Ui.PageHeader />
        <Ui.PageToolbar />
        <Ui.PageMetadata />
        {/* Article page content */}
        <div
          className="mw-body mw-body-content mt-4"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
      </Layout.Grid>
    </>
  );
}
