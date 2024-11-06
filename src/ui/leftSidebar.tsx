import * as Context from "@/lib/context";
import * as Ui from "@/ui";

export default function LeftSidebar() {
  const { menuState } = Context.useGlobalContext();

  return (
    <div className="flex flex-col mt-[33px]">
      {menuState.mainMenu.isPinned && (
        <Ui.Menus.PinnableMenu name="mainMenu">
          <Ui.MainMenu />
        </Ui.Menus.PinnableMenu>
      )}
      {menuState.tableOfContents.isPinned && (
        <Ui.Menus.PinnableMenu name="tableOfContents">
          <Ui.TableOfContents />
        </Ui.Menus.PinnableMenu>
      )}
    </div>
  );
}
