import * as React from "react";
import * as Context from "@/lib/context";
import * as Utils from "@/lib/utils";

interface GridProps {
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  children: React.ReactNode;
}

export default function Grid({
  children,
  leftSidebar,
  rightSidebar,
}: GridProps) {
  const { menuState } = Context.useGlobalContext();
  const { mainMenu, tableOfContents, toolsMenu } = menuState;

  const showLeftColumn = mainMenu.isPinned || tableOfContents.isPinned;
  const showRightColumn = toolsMenu.isPinned;

  const gridColsClasses = Utils.cx({
    "grid-cols-1": true,

    "medium:grid-cols-[minmax(0,1fr)]": !showLeftColumn && !showRightColumn,
    "medium:grid-cols-[12.25rem_minmax(0,1fr)]":
      showLeftColumn && !showRightColumn,
    "medium:grid-cols-[minmax(0,1fr)_12.25rem]":
      !showLeftColumn && showRightColumn,
    "medium:grid-cols-[12.25rem_minmax(0,1fr)_12.25rem]":
      showLeftColumn && showRightColumn,

    "large:grid-cols-[minmax(0,1fr)]": !showLeftColumn && !showRightColumn,
    "large:grid-cols-[15.5rem_minmax(0,1fr)]":
      showLeftColumn && !showRightColumn,
    "large:grid-cols-[minmax(0,1fr)_15.5rem]":
      !showLeftColumn && showRightColumn,
    "large:grid-cols-[15.5rem_minmax(0,1fr)_15.5rem]":
      showLeftColumn && showRightColumn,

    "m-auto": !showLeftColumn,
  });

  return (
    <div
      className={Utils.cx([
        "grid gap-x-6 grid-rows-[min-content_1fr_min-content] mt-8 max-w-max",
        gridColsClasses,
      ])}
    >
      {showLeftColumn && (
        <div className="hidden medium:block -ml-[6px]">{leftSidebar}</div>
      )}
      <div
        className={Utils.cx([
          "w-full medium:max-w-[948px]",
          {
            "m-auto": Boolean(!showRightColumn),
          },
        ])}
      >
        {children}
      </div>
      {showRightColumn && (
        <div className="hidden medium:block">{rightSidebar}</div>
      )}
    </div>
  );
}
