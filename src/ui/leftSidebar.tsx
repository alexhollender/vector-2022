import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";

export default function LeftSidebar() {
  const { menuState, isLoggedIn } = Context.useGlobalContext();

  return (
    <div className="flex flex-col mt-8 h-full">
      {menuState.mainMenu.isPinned && (
        <Ui.Menus.PinnableMenu name="mainMenu">
          <Ui.MainMenu />
        </Ui.Menus.PinnableMenu>
      )}
      {menuState.tableOfContents.isPinned && (
        <Ui.Menus.PinnableMenu
          name="tableOfContents"
          className={Utils.cx([
            "sticky",
            {
              "top-4": !isLoggedIn,
              "top-16": isLoggedIn,
            },
          ])}
        >
          <Ui.TableOfContents />
        </Ui.Menus.PinnableMenu>
      )}
    </div>
  );
}
