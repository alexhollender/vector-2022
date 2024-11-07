import * as Types from "@/lib/types";

const addClass = (base: string, newClass: string) => {
  if (!newClass) return base;
  if (base === "") return newClass;
  return `${base} ${newClass}`;
};

type Classes =
  | Array<string | Record<string, boolean> | null | undefined>
  | string
  | Record<string, boolean>
  | null
  | undefined;

export const cx = (classes: Classes) => {
  const arrayified = Array.isArray(classes) ? classes : [classes];
  return arrayified.reduce((toApply: string, newClass) => {
    if (!newClass) return toApply;
    if (typeof newClass === "string") return addClass(toApply, newClass);

    return Object.keys(newClass).reduce((conditionals, className) => {
      if (!!newClass[className]) return addClass(conditionals, className);
      return conditionals;
    }, toApply);
  }, "");
};

export function decodeSlug(encodedSlug: string): string {
  return decodeURIComponent(encodedSlug).replace(/ /g, "_");
}

export function formatArticleTitle(slug: string): string {
  return slug.replace(/_/g, " ");
}

export const organizeHierarchy = (
  flatSections: Types.Section[]
): Types.Section[] => {
  const result: Types.Section[] = [];
  let currentParents: Types.Section[] = [];

  flatSections.forEach((section) => {
    const newSection = { ...section, children: [] };

    while (
      currentParents.length > 0 &&
      currentParents[currentParents.length - 1].toclevel >= section.toclevel
    ) {
      currentParents.pop();
    }

    if (section.toclevel === 1) {
      result.push(newSection);
      currentParents = [newSection];
    } else if (currentParents.length > 0) {
      currentParents[currentParents.length - 1].children?.push(newSection);
      currentParents.push(newSection);
    }
  });

  return result;
};
