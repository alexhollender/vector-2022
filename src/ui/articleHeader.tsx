import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function ArticleHeader() {
  const { articleTitle, menuState } = Context.useGlobalContext();

  return (
    <header className="flex justify-between items-end border-b border-border">
      <div className="flex items-center gap-x-2">
        {!menuState.tableOfContents.isPinned && (
          <Ui.Menus.PinnableMenu
            name="tableOfContents"
            className="-translate-x-2 max-w-xs"
            openCloseMenuButton={
              <Ui.Buttons.IconButton
                className="-mr-1.5"
                icon={<Icons.Contents />}
              />
            }
          >
            <Ui.TableOfContents />
          </Ui.Menus.PinnableMenu>
        )}
        <h1 className="text-[28.8px]">{articleTitle}</h1>
      </div>
      <Ui.LanguageMenu />
    </header>
  );
}
