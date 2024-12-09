import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function Header() {
  const { menuState, isLoggedIn } = Context.useGlobalContext();

  return (
    <header id="Top" className="flex gap-x-2 lg:gap-x-4 pt-2">
      <div className="flex grow justify-between lg:justify-start items-center gap-x-7">
        <div className="flex items-center gap-x-[14px]">
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
        </div>
        <div className="hidden lg:block relative grow max-w-[500px]">
          <Ui.SearchInput />
          <Ui.SearchResults />
        </div>
        <div className="block lg:hidden">
          <Ui.Buttons.IconButton icon={<Icons.Search />} />
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        {!isLoggedIn && <Ui.UserMenu.UserToolbarLoggedOut />}
        {isLoggedIn && <Ui.UserMenu.UserToolbarLoggedIn />}
      </div>
    </header>
  );
}
