import * as Types from "@/lib/types";
import * as Ui from "@/ui";

export default function ToolsMenuContents() {
  const generalItems: Types.MenuItem[] = [
    { label: "What links here" },
    { label: "Related changes" },
    { label: "Special pages" },
    { label: "Permanent link" },
    { label: "Page information" },
    { label: "Cite this page" },
    { label: "Get shortened URL" },
    { label: "Download QR code" },
    { label: "Expand all" },
    { label: "Edit interlanguage links" },
  ];

  const printExportItems: Types.MenuItem[] = [
    { label: "Download as PDF" },
    { label: "Printable version" },
  ];

  const otherProjectsItems: Types.MenuItem[] = [
    { label: "Wikimedia Commons" },
    { label: "Wikiquote" },
    { label: "Wikiversity" },
    { label: "Wikidata item" },
  ];

  return (
    <>
      <Ui.Menus.MenuHeader menuName="toolsMenu" title="Tools" />
      <menu>
        <Ui.Menus.MenuSection heading="General" items={generalItems} />
        <Ui.Menus.MenuSection heading="Print/export" items={printExportItems} />
        <Ui.Menus.MenuSection
          heading="In other projects"
          items={otherProjectsItems}
        />
      </menu>
    </>
  );
}
