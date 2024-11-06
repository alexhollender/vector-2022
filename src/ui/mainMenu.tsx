import * as Ui from "@/ui";

export default function MainMenuContents() {
  return (
    <>
      <Ui.Menus.MenuHeader menuName="mainMenu" title="Main Menu" />
      <menu>
        <Ui.Menus.MenuSection
          items={[
            "Main page",
            "Contents",
            "Current events",
            "Random article",
            "About Wikipedia",
            "Contact us",
          ]}
        />
        <Ui.Menus.MenuSection
          heading="Contribute"
          items={[
            "Help",
            "Learn to edit",
            "Community portal",
            "Recent changes",
            "Upload file",
          ]}
        />
      </menu>
    </>
  );
}
