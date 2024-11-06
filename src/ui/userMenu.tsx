import * as Ui from "@/ui";

export default function UserMenuContents() {
  return (
    <>
      <menu>
        <Ui.Menus.MenuSection items={["Contributions", "Talk"]} />
      </menu>
    </>
  );
}
