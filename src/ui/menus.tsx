import * as React from "react";
import * as Types from "@/lib/types";
import * as Context from "@/lib/context";
import * as Ui from "@/ui";
import * as Utils from "@/lib/utils";

import Link from "next/link";

type MenuName = keyof Types.MenuState;

interface PinnableMenuProps {
  name: MenuName;
  className?: string;
  openCloseMenuButton?: React.ReactElement;
  children: React.ReactNode;
  left?: boolean;
}

export function PinnableMenu({
  name,
  className,
  openCloseMenuButton,
  children,
  left,
}: PinnableMenuProps) {
  const { menuState, setMenuState, toggleMenuOpen } =
    Context.useGlobalContext();
  const { isPinned, isOpen } = menuState[name];
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isPinned &&
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMenuOpen(name);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [name, isPinned, isOpen, toggleMenuOpen, setMenuState]);

  return (
    <div
      ref={menuRef}
      className={Utils.cx([className, { relative: !isPinned }])}
    >
      {!isPinned &&
        openCloseMenuButton &&
        React.cloneElement(openCloseMenuButton, {
          onClick: () => toggleMenuOpen(name),
          "aria-expanded": isOpen,
        })}
      <div
        className={Utils.cx([
          "p-4 max-h-[85vh] overflow-hidden overflow-y-auto leading-[initial]",
          className,
          {
            "w-max z-50 bg-background-base shadow-md rounded-sm border border-background-gray absolute":
              !isPinned,
            relative: isPinned,
            hidden: !isPinned && !isOpen,
            block: isPinned || isOpen,
            "right-0": left === true,
          },
        ])}
      >
        {children}
      </div>
    </div>
  );
}

export function MenuHeader({
  menuName,
  title,
}: {
  menuName: keyof Types.MenuState;
  title: string;
}) {
  const { menuState, toggleMenuPin } = Context.useGlobalContext();
  const isPinned = menuState[menuName].isPinned;

  return (
    <header className="flex items-center mb-1.5 pb-1.5 border-b border-background-gray leading-[1.6]">
      <h2 className="font-bold mr-3">{title}</h2>
      <Ui.Buttons.SmallButton
        label={isPinned ? "hide" : "move to sidebar"}
        onClick={() => toggleMenuPin(menuName)}
      />
    </header>
  );
}

interface MenuSectionProps {
  heading?: string;
  items: Types.MenuItem[];
}

export function MenuSection({ heading, items }: MenuSectionProps) {
  return (
    <>
      {heading && (
        <div className="my-1.5 py-1.5 text-text-subtle border-b border-background-gray">
          {heading}
        </div>
      )}
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {!item.custom ? (
                <div className="flex items-center gap-x-1.5 py-1.5 text-progressive hover:cursor-pointer hover:underline">
                  {item.icon && <div className="w-5 h-5">{item.icon}</div>}
                  {item.label}
                </div>
              ) : (
                item.custom
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

interface MenuItemWithLink extends Types.MenuItem {
  href: string;
}

interface MenuColumnProps {
  items: MenuItemWithLink[];
  columnIndex: number;
}

const MenuColumn = ({ items, columnIndex }: MenuColumnProps) => {
  return (
    <div className="flex-1 min-w-32">
      <ul>
        {items.map((item, index) => (
          <li key={`col${columnIndex}-${index}`}>
            <Link
              href={item.href}
              className="py-2 block text-progressive visited:text-progressive"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface MenuSectionColumnsProps {
  heading?: string;
  column1Items: MenuItemWithLink[];
  column2Items?: MenuItemWithLink[];
  column3Items?: MenuItemWithLink[];
  column4Items?: MenuItemWithLink[];
}

export const MenuSectionColumns = ({
  heading,
  column1Items,
  column2Items = [],
  column3Items = [],
  column4Items = [],
}: MenuSectionColumnsProps) => {
  return (
    <div>
      {heading && (
        <div className="my-2 py-2 text-text-subtle font-bold">{heading}</div>
      )}
      <div className="flex gap-8">
        <MenuColumn items={column1Items} columnIndex={1} />
        {column2Items.length > 0 && (
          <MenuColumn items={column2Items} columnIndex={2} />
        )}
        {column3Items.length > 0 && (
          <MenuColumn items={column3Items} columnIndex={3} />
        )}
        {column4Items.length > 0 && (
          <MenuColumn items={column4Items} columnIndex={4} />
        )}
      </div>
    </div>
  );
};
