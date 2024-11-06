import * as Context from "@/lib/context";
import * as Ui from "@/ui";

export default function RightSidebar() {
  const { menuState } = Context.useGlobalContext();

  return (
    <div className="flex flex-col mt-[33px]">
      {menuState.toolsMenu.isPinned && (
        <Ui.Menus.PinnableMenu name="toolsMenu">
          <Ui.ToolsMenu />
        </Ui.Menus.PinnableMenu>
      )}
    </div>
  );
}
