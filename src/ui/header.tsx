import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function Header() {
  const { menuState, isLoggedIn } = Context.useGlobalContext();

  return (
    <header id="top" className="flex pt-2">
      <div className="flex grow items-center">
        {!menuState.mainMenu.isPinned && (
          <Ui.Menus.PinnableMenu
            name="mainMenu"
            openCloseMenuButton={
              <Ui.Buttons.IconButton
                className="-ml-1.5"
                icon={<Icons.Menu />}
              />
            }
          >
            <Ui.MainMenu />
          </Ui.Menus.PinnableMenu>
        )}
        <Ui.Logo />
        <div className="relative ml-4 grow max-w-[500px]">
          <Ui.SearchInput />
          <Ui.SearchResults />
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        {!isLoggedIn && <Ui.UserMenu.UserToolbarLoggedOut />}
        {isLoggedIn && <Ui.UserMenu.UserToolbarLoggedIn />}
      </div>
    </header>
  );
}
