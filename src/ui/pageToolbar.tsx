import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Icons from "@/icons/icons";

export default function PageToolbar() {
  const { articleSlug, menuState, isLoggedIn } = Context.useGlobalContext();

  return (
    <header className="flex justify-between items-end h-9 mt-[1px] border-b border-background-disabled">
      <Ui.Buttons.Tabs
        tabs={[
          { label: "Article", href: `/wiki/${articleSlug}` },
          { label: "Talk", href: `/wiki/${articleSlug}/talk` },
        ]}
      />
      <div className="flex items-baseline">
        <Ui.Buttons.Tabs
          tabs={[
            "Read",
            "Edit",
            ...(isLoggedIn ? ["Edit source"] : []),
            "View History",
          ]}
        />
        {isLoggedIn && (
          <Ui.Buttons.IconButton
            icon={<Icons.Watch />}
            className="ml-2.5 scale-90 translate-y-1"
          />
        )}
        {!menuState.toolsMenu.isPinned && (
          <Ui.Menus.PinnableMenu
            name="toolsMenu"
            left={true}
            containerClassName={Utils.cx([
              {
                "ml-1.5": !isLoggedIn,
                "ml-0": isLoggedIn,
              },
            ])}
            menuClassName="-mr-3"
            openCloseMenuButton={
              <Ui.Buttons.ButtonQuietNeutral
                className="-mr-3 font-normal"
                label="Tools"
                iconSecondary={<Icons.Down />}
              />
            }
          >
            <Ui.ToolsMenu />
          </Ui.Menus.PinnableMenu>
        )}
      </div>
    </header>
  );
}
