import * as Ui from "@/ui";

export default function ToolsMenuContents() {
  return (
    <>
      <Ui.Menus.MenuHeader menuName="toolsMenu" title="Tools" />
      <menu>
        <Ui.Menus.MenuSection
          heading="General"
          items={[
            "What links here",
            "Related changes",
            "Special pages",
            "Permanent link",
            "Page information",
            "Cite this page",
            "Get shortened URL",
            "Download QR code",
            "Expand all",
            "Edit interlanguage links",
          ]}
        />
        <Ui.Menus.MenuSection
          heading="Print/export"
          items={["Download as PDF", "Printable version"]}
        />
        <Ui.Menus.MenuSection
          heading="In other projects"
          items={[
            "Wikimedia Commons",
            "Wikiquote",
            "Wikiversity",
            "Wikidata item",
          ]}
        />
      </menu>
    </>
  );
}
