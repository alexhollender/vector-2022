import React from "react";
import * as Ui from "@/ui";
import * as Layout from "@/layout";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
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
        {children}
      </Layout.Grid>
    </>
  );
}
