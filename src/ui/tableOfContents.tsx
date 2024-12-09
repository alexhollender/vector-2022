import * as React from "react";
import * as Types from "@/lib/types";
import * as Context from "@/lib/context";
import * as Hooks from "@/lib/hooks";
import * as Utils from "@/lib/utils";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

export default function TableOfContents() {
  const { articleTableOfContents, talkTableOfContents, routeType } =
    Context.useGlobalContext();

  const [expanded, setExpanded] = React.useState<Types.ExpandedState>({});

  const sections =
    routeType === "article" ? articleTableOfContents : talkTableOfContents;

  const { activeSection, isSectionActive } = Hooks.useActiveSection(sections);

  React.useEffect(() => {
    const shouldExpandAll = sections.length <= 26;
    const newExpanded: Types.ExpandedState = {};

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

  const renderSection = (section: Types.Section) => {
    const hasChildren = section.children && section.children.length > 0;
    const isExpanded = expanded[section.anchor];
    const isLevel1 = section.toclevel === 1;

    return (
      <li key={section.anchor}>
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
          <a
            href={`#${section.anchor}`}
            className={Utils.cx([
              "visited:text-progressive transition-colors duration-200 py-[6px]",
              {
                "text-text-base visited:text-text-base font-bold":
                  section.anchor === activeSection,
                "text-text-base visited:text-text-base":
                  Boolean(hasChildren) &&
                  isSectionActive(section) &&
                  section.anchor !== activeSection,
              },
            ])}
          >
            <span dangerouslySetInnerHTML={{ __html: section.line }} />
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

  const hierarchicalSections = Utils.organizeHierarchy(sections);

  return (
    <nav className="leading-[1.2]">
      <Ui.Menus.MenuHeader menuName="tableOfContents" title="Contents" />
      <ul>
        <li className="py-[6px]">
          <div>
            <a
              href="#Header"
              className={Utils.cx([
                "transition-colors duration-200 visited:text-progressive",
                {
                  "text-text-base font-bold visited:text-text-base":
                    activeSection === "TopOfPage",
                },
              ])}
            >
              <span>(Top)</span>
            </a>
          </div>
        </li>
        {hierarchicalSections.map((section) => renderSection(section))}
      </ul>
    </nav>
  );
}
