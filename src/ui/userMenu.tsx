import * as Context from "@/lib/context";
import * as Types from "@/lib/types";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

import Link from "next/link";

export function UserToolbarLoggedOut() {
  const { setIsLoggedIn } = Context.useGlobalContext();

  return (
    <>
      <Ui.Buttons.IconButton icon={<Icons.Appearance />} />
      <Link href="/">Donate</Link>
      <Link href="/">Create account</Link>
      <button onClick={() => setIsLoggedIn(true)}>
        <Link href="/">Log in</Link>
      </button>
      <UserMenuLoggedOut />
    </>
  );
}

function UserMenuLoggedOut() {
  return (
    <Ui.Menus.PinnableMenu
      name="userMenu"
      left={true}
      openCloseMenuButton={
        <Ui.Buttons.IconButton className="-mr-1.5" icon={<Icons.Dots />} />
      }
    >
      <menu>
        <Ui.Menus.MenuSection
          items={[{ label: "Contributions" }, { label: "Talk" }]}
        />
      </menu>
    </Ui.Menus.PinnableMenu>
  );
}

export function UserToolbarLoggedIn() {
  return (
    <>
      <Link href="/">Usermenu1993</Link>
      <Ui.Buttons.IconButton icon={<Icons.Appearance />} />
      <Ui.Buttons.IconButton icon={<Icons.Bell />} />
      <Ui.Buttons.IconButton icon={<Icons.Inbox />} />
      <Ui.Buttons.IconButton icon={<Icons.Watchlist />} />
      <UserMenuLoggedIn />
    </>
  );
}

export function UserMenuLoggedIn() {
  const { setIsLoggedIn } = Context.useGlobalContext();

  const menuItems: Types.MenuItem[] = [
    { label: "Talk", icon: <Icons.UserTalk /> },
    { label: "Sandbox", icon: <Icons.Sandbox /> },
    { label: "Preferences", icon: <Icons.Settings /> },
    { label: "Beta", icon: <Icons.Beta /> },
    { label: "Contributions", icon: <Icons.Contributions /> },
    { label: "Translations", icon: <Icons.Language /> },
    { label: "Uploaded media", icon: <Icons.Media /> },
    {
      label: "Log out",
      custom: (
        <button
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-x-1.5 py-1.5 text-progressive hover:cursor-pointer hover:underline"
        >
          <div className="w-5 h-5">
            <Icons.Logout />
          </div>
          Log out
        </button>
      ),
    },
  ];

  return (
    <Ui.Menus.PinnableMenu
      name="userMenu"
      left={true}
      openCloseMenuButton={
        <Ui.Buttons.IconButton
          className="-mr-1.5"
          icon={<Icons.User />}
          iconSecondary={<Icons.Down />}
        />
      }
    >
      <menu>
        <Ui.Menus.MenuSection items={menuItems} />
      </menu>
    </Ui.Menus.PinnableMenu>
  );
}
