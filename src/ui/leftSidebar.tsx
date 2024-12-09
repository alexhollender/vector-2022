import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";
import * as Hooks from "@/lib/hooks";

export default function LeftSidebar() {
  const { menuState, isLoggedIn } = Context.useGlobalContext();
  const isBelowElement = Hooks.useIsBelowElement("PageHeader");

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
          containerClassName={Utils.cx([
            "sticky",
            {
              "top-4": !isLoggedIn,
              "top-16": isLoggedIn,
            },
          ])}
          menuClassName={Utils.cx([
            {
              "max-h-[calc(100vh-122px)]": !isBelowElement,
              "max-h-[calc(100vh-20px)]": isBelowElement,
            },
          ])}
        >
          <Ui.TableOfContents />
        </Ui.Menus.PinnableMenu>
      )}
    </div>
  );
}
