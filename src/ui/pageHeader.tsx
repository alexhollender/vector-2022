import * as Context from "@/lib/context";
import * as Hooks from "@/lib/hooks";
import * as Utils from "@/lib/utils";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function PageHeader() {
  const { articleTitle, menuState } = Context.useGlobalContext();
  const isBelowPageHeader = Hooks.useIsBelowElement("PageHeader");

  return (
    <header
      className="h-10 flex items-center border-b border-border"
      id="PageHeader"
    >
      <div className="flex items-center gap-x-2 grow">
        {!menuState.tableOfContents.isPinned && (
          <Ui.Menus.PinnableMenu
            name="tableOfContents"
            containerClassName={Utils.cx([
              { "-translate-x-2": !isBelowPageHeader },
              {
                "!fixed top-4 left-4 bg-background-base border border-border":
                  isBelowPageHeader,
              },
            ])}
            menuClassName="px-8 max-h-[calc(99vh-126px)]"
            openCloseMenuButton={
              <Ui.Buttons.IconButton
                className={Utils.cx([{ "-mr-1.5": !isBelowPageHeader }])}
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
