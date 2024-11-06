import * as React from "react";
import * as Context from "@/lib/context";
import * as Utils from "@/lib/utils";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

type Section = {
  anchor: string;
  line: string;
  toclevel: number;
  children?: Section[];
};

type ExpandedState = {
  [key: string]: boolean;
};

export default function TableOfContents() {
  const { articleTableOfContents, talkTableOfContents, routeType } =
    Context.useGlobalContext();

  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const sections =
    routeType === "article" ? articleTableOfContents : talkTableOfContents;

  const organizeHierarchy = (flatSections: Section[]): Section[] => {
    const result: Section[] = [];
    let currentParents: Section[] = [];

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

  // Initialize expanded state based on total section count
  React.useEffect(() => {
    const shouldExpandAll = sections.length <= 26;
    const newExpanded: ExpandedState = {};

    sections.forEach((section) => {
      if (section.toclevel === 1) {
        newExpanded[section.anchor] = shouldExpandAll;
      }
    });

    setExpanded(newExpanded);
  }, [sections]);

  const toggleSection = (anchor: string) => {
    setExpanded((prev) => ({
      ...prev,
      [anchor]: !prev[anchor],
    }));
  };

  const renderSection = (section: Section) => {
    const hasChildren = section.children && section.children.length > 0;
    const isExpanded = expanded[section.anchor];
    const isLevel1 = section.toclevel === 1;

    return (
      <li key={section.anchor} className="py-1 last-of-type:pb-0">
        <div
          className={Utils.cx([
            "flex items-center",
            {
              "-ml-[22px]": Boolean(isLevel1 && hasChildren),
            },
          ])}
        >
          {isLevel1 && hasChildren && (
            <Ui.Buttons.SmallIconButton
              onClick={() => toggleSection(section.anchor)}
              icon={
                <div
                  className={`transform transition-transform duration-200 ${
                    expanded[section.anchor] ? "rotate-90" : ""
                  }`}
                >
                  <Icons.ExpandCollapseTocSection />
                </div>
              }
            />
          )}
          <a href={`#${section.anchor}`}>
            <span>{section.line}</span>
          </a>
        </div>
        {hasChildren && (isExpanded || !isLevel1) && (
          <ul className="ml-3">
            {section.children?.map((child) => renderSection(child))}
          </ul>
        )}
      </li>
    );
  };

  if (sections.length === 0) return null;

  const hierarchicalSections = organizeHierarchy(sections);

  return (
    <nav className="leading-[1.4]">
      <Ui.Menus.MenuHeader menuName="tableOfContents" title="Contents" />
      <ul>
        <li className="p-1">
          <div>
            <a href={`#top`}>
              <span>(Top)</span>
            </a>
          </div>
        </li>
        {hierarchicalSections.map((section) => renderSection(section))}
      </ul>
    </nav>
  );
}
