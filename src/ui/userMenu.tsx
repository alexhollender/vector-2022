import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

import Link from "next/link";

export function UserMenuLoggedOut() {
  const { setIsLoggedIn } = Context.useGlobalContext();

  return (
    <>
      <Ui.Buttons.IconButton icon={<Icons.Appearance />} />
      <Link href="/">Donate</Link>
      <Link href="/">Create account</Link>
      <button onClick={() => setIsLoggedIn(true)}>
        <Link href="/">Log in</Link>
      </button>
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
    </>
  );
}

export function UserMenuLoggedIn() {
  const { setIsLoggedIn } = Context.useGlobalContext();

  return (
    <>
      <Link href="/">Usermenu1993</Link>
      <Ui.Buttons.IconButton icon={<Icons.Appearance />} />
      <Ui.Buttons.IconButton icon={<Icons.Bell />} />
      <Ui.Buttons.IconButton icon={<Icons.Inbox />} />
      <Ui.Buttons.IconButton icon={<Icons.Watchlist />} />
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
          <Ui.Menus.MenuSection
            items={[
              {
                label: "Talk",
                icon: <Icons.Bell />,
              },
              {
                label: "Sandbox",
                icon: <Icons.Bell />,
              },
              {
                label: "Preferences",
                icon: <Icons.Bell />,
              },
              {
                label: "Beta",
                icon: <Icons.Bell />,
              },
              {
                label: "Watchlist",
                icon: <Icons.Bell />,
              },
              {
                label: "Contributions",
                icon: <Icons.Bell />,
              },
              {
                label: "Translations",
                icon: <Icons.Bell />,
              },
              {
                label: "Uploaded media",
                icon: <Icons.Bell />,
              },
              {
                label: "Log out",
                icon: <Icons.Bell />,
              },
            ]}
          />
        </menu>
      </Ui.Menus.PinnableMenu>
    </>
  );
}
