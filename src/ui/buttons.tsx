import * as React from "react";
import * as Context from "@/lib/context";
import Link from "next/link";

const baseStyles = {
  button:
    "flex items-center whitespace-nowrap rounded-sm transition-colors duration-150",
  icon: {
    small: "w-3 h-3",
    normal: "w-5 h-5",
  },
  padding: {
    small: "py-0.5 px-2",
    normal: "py-[5px] px-3",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconSecondary?: React.ReactNode;
  label: string;
}

export function ButtonQuietProgressive({
  label,
  icon,
  iconSecondary,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`
        ${baseStyles.button}
        ${baseStyles.padding.normal}
        gap-x-1.5 text-progressive font-bold
        hover:bg-background-progressive-subtle
        ${props.className || ""}
      `}
    >
      {icon && <div className={baseStyles.icon.normal}>{icon}</div>}
      {label}
      {iconSecondary && (
        <div className={baseStyles.icon.small}>{iconSecondary}</div>
      )}
    </button>
  );
}

export function ButtonNormalNeutral({
  label,
  icon,
  iconSecondary,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`
        ${baseStyles.button}
        ${baseStyles.padding.normal}
        justify-center font-bold
        border border-border bg-background-subtle
        hover:bg-background-background-text-base
        ${props.className || ""}
      `}
    >
      {icon && <div className={baseStyles.icon.normal}>{icon}</div>}
      {label}
      {iconSecondary && (
        <div className={baseStyles.icon.small}>{iconSecondary}</div>
      )}
    </button>
  );
}

export function SmallButton({ label, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`
        ${baseStyles.button}
        ${baseStyles.padding.small}
        bg-background-gray text-xs
        hover:bg-background-subtle
        ${props.className || ""}
      `}
    >
      {label}
    </button>
  );
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function SmallIconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`
        ${baseStyles.button}
        w-[22px] h-[22px] p-[5px]
        hover:bg-background-subtle
        ${props.className || ""}
      `}
    >
      {icon}
    </button>
  );
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`
        ${baseStyles.button}
        w-8 h-8 p-1.5
        hover:bg-background-subtle
        ${props.className || ""}
      `}
    >
      {icon}
    </button>
  );
}

interface Tab {
  label: string;
  href?: string;
}

interface TabsProps {
  tabs: (Tab | string)[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const { routeType } = Context.useGlobalContext();

  const normalizedTabs = tabs.map((tab) =>
    typeof tab === "string" ? { label: tab, href: "/" } : { href: "/", ...tab }
  );

  const selectedTab =
    normalizedTabs.find(
      (tab) => tab.label.toLowerCase() === routeType?.toLowerCase()
    ) || normalizedTabs[0];

  return (
    <div className="flex gap-x-3">
      {normalizedTabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className={`
            pb-1.5 -mb-[1px] whitespace-nowrap
            no-underline hover:no-underline
            ${
              selectedTab.label === tab.label
                ? "text-text-base hover:text-text-base visited:text-text-base hover:visited:text-text-base border-b-2 border-text-base"
                : "text-progressive hover:text-progressive-hover visited:text-progressive visited:hover:text-progressive-hover"
            }
          `}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};
