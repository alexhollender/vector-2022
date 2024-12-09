import * as Context from "@/lib/context";
import * as Hooks from "@/lib/hooks";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function StickyHeader() {
  const { isLoggedIn, articleTitle } = Context.useGlobalContext();
  const isScrolledPastTop = Hooks.useIsBelowElement("Top");

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-[50px]
        hidden items-center medium:px-11 large:px-[52px] max-w-[99.75rem] mx-auto
        bg-background-base border-b border-background-gray
        transform transition-transform duration-200
        ${
          isScrolledPastTop && isLoggedIn
            ? "translate-y-0 medium:flex"
            : "-translate-y-full hidden"
        }
      `}
    >
      <Ui.Buttons.IconButton icon={<Icons.Search />} />
      <h1 className="text-2xl ml-[30px] pl-[30px] border-l border-border-subtle flex-1">
        {articleTitle}
      </h1>
      <div className="flex items-center gap-x-2">
        <Ui.Buttons.IconButton icon={<Icons.Talk />} />
        <Ui.Buttons.IconButton icon={<Icons.History />} />
        <Ui.Buttons.IconButton icon={<Icons.Watch />} />
        <Ui.Buttons.IconButton icon={<Icons.Edit />} />
        <Ui.Buttons.IconButton icon={<Icons.Wikitext />} />
        <Ui.Buttons.ButtonQuietNeutral
          icon={<Icons.Language />}
          label="120 Languages"
          iconSecondary={<Icons.Down />}
        />
        <Ui.UserMenu.UserMenuLoggedIn />
      </div>
    </header>
  );
}
