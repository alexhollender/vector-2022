import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function PageToolbar() {
  const { articleSlug, menuState } = Context.useGlobalContext();

  return (
    <header className="flex justify-between items-end mt-1 border-b border-background-disabled">
      <Ui.Buttons.Tabs
        tabs={[
          { label: "Article", href: `/wiki/${articleSlug}` },
          { label: "Talk", href: `/wiki/${articleSlug}/talk` },
        ]}
      />
      <div className="flex items-baseline">
        <Ui.Buttons.Tabs tabs={["Read", "Edit", "View History"]} />
        {!menuState.toolsMenu.isPinned && (
          <Ui.Menus.PinnableMenu
            name="toolsMenu"
            openCloseMenuButton={
              <Ui.Buttons.ButtonQuietNeutral
                className="-mr-3 font-normal"
                label="Tools"
                iconSecondary={<Icons.Down />}
              />
            }
            left={true}
            className="ml-1.5"
          >
            <Ui.ToolsMenu />
          </Ui.Menus.PinnableMenu>
        )}
      </div>
    </header>
  );
}