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
      <Ui.Menus.PinnableMenu
        name="languageMenu"
        left={true}
        openCloseMenuButton={
          <Ui.Buttons.ButtonQuietProgressive
            className="-mr-[12px]"
            label="120 Languages"
            icon={<Icons.Language color="#3366cc" />}
            iconSecondary={
              <span className="h-6 rotate-90 -translate-x-1.5 inline-block origin-right">
                <Icons.ExpandCollapseTocSection color="#3366cc" />
              </span>
            }
          />
        }
      >
        <Ui.LanguageMenu />
      </Ui.Menus.PinnableMenu>
    </header>
  );
}
