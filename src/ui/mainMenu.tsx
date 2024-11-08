import * as Types from "@/lib/types";
import * as Ui from "@/ui";

export default function MainMenuContents() {
  const navigationItems: Types.MenuItem[] = [
    { label: "Main page" },
    { label: "Contents" },
    { label: "Current events" },
    { label: "Random article" },
    { label: "About Wikipedia" },
    { label: "Contact us" },
  ];

  const contributeItems: Types.MenuItem[] = [
    { label: "Help" },
    { label: "Learn to edit" },
    { label: "Community portal" },
    { label: "Recent changes" },
    { label: "Upload file" },
  ];

  return (
    <>
      <Ui.Menus.MenuHeader menuName="mainMenu" title="Main Menu" />
      <menu>
        <Ui.Menus.MenuSection items={navigationItems} />
        <Ui.Menus.MenuSection heading="Contribute" items={contributeItems} />
      </menu>
    </>
  );
}
