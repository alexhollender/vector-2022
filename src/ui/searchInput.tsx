import * as React from "react";
import * as Api from "@/lib/api";
import * as Hooks from "@/lib/hooks";
import * as Context from "@/lib/context";
import * as Utils from "@/lib/utils";
import * as Icons from "@/icons/icons";

import debounce from "lodash/debounce";

export default function SearchBox() {
  const [value, setValue] = React.useState("");
  const searchWiki = Hooks.useWikiSearch(value);
  const { searchResults, isSearchResultsVisible, setIsSearchResultsVisible } =
    Context.useGlobalContext();

  const debouncedSearch = React.useCallback(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    debounce((searchTerm: string) => {
      Api.searchWiki(searchTerm);
    }, 300),
    [searchWiki]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
    setIsSearchResultsVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsSearchResultsVisible(false);
    }, 10);
  };

  // Helper to check if results should be shown
  const showResults = searchResults.length > 0 && isSearchResultsVisible;

  return (
    <div
      className={Utils.cx([
        "flex grow",
        {
          "ml-6 rounded-sm": !showResults,
          "ml-0 rounded-t-sm": showResults,
        },
      ])}
    >
      <div
        className={Utils.cx([
          "flex gap-x-2 grow relative bg-white border border-border shadow-[inset_0_0_0_1px_transparent] hover:border-border-interactive focus-within:border-progressive hover:focus-within:border-progressive transition-[background-color,color,border-color,box-shadow]",
          {
            "rounded-l-sm": !showResults,
            "rounded-tl-sm": showResults,
          },
        ])}
      >
        <span
          className={Utils.cx([
            "absolute top-1/2 -translate-y-1/2 w-5 h-5",
            {
              "left-[9px]": !showResults,
              "left-[22px]": showResults,
            },
          ])}
        >
          <Icons.Search color="var(--color-border-interactive)" />
        </span>
        <input
          type="search"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Search Wikipedia..."
          className={Utils.cx([
            "w-full py-1 pr-2 placeholder:text-border-interactive focus:ring-1 focus:outline-none focus:ring-inset focus:ring-blue-500",
            {
              "pl-9": !showResults,
              "pl-[60px]": showResults,
            },
          ])}
        />
      </div>
      <div className="rounded-r-sm border-r border-y border-border">
        <button className="bg-background-subtle inline-flex items-center justify-center gap-1 box-border min-h-[32px] max-w-7xl m-0 px-3 font-inherit text-inherit font-bold truncate whitespace-nowrap normal-case transition-colors duration-100">
          Search
        </button>
      </div>
    </div>
  );
}
