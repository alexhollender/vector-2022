import * as Context from "@/lib/context";
import * as Ui from "@/ui";

export default function ArticleToolbar() {
  const { articleSlug, menuState } = Context.useGlobalContext();

  return (
    <header className="flex justify-between items-end mt-[7px] border-b border-background-disabled">
      <Ui.Buttons.Tabs
        tabs={[
          { label: "Article", href: `/wiki/${articleSlug}` },
          { label: "Talk", href: `/wiki/${articleSlug}/talk` },
        ]}
      />
      <div className="flex">
        <Ui.Buttons.Tabs tabs={["Read", "Edit", "View History"]} />
        {!menuState.toolsMenu.isPinned && (
          <Ui.Menus.PinnableMenu
            name="toolsMenu"
            openCloseMenuButton={<button>Tools</button>}
            left={true}
            className="ml-3"
          >
            <Ui.ToolsMenu />
          </Ui.Menus.PinnableMenu>
        )}
      </div>
    </header>
  );
}
