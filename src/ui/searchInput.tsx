import * as React from "react";
import * as Api from "@/lib/api";
import * as Types from "@/lib/types";
import * as Context from "@/lib/context";
import * as Utils from "@/lib/utils";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

import debounce from "lodash/debounce";

export default function SearchBox() {
  const [value, setValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const {
    searchResults,
    isSearchResultsVisible,
    setIsSearchResultsVisible,
    setSearchResults,
    language,
  } = Context.useGlobalContext();

  const debouncedSearch = React.useMemo(
    () =>
      debounce(async (searchTerm: string) => {
        try {
          const results: Types.SearchResult[] = await Api.searchWiki(
            searchTerm,
            language
          );
          setSearchResults(results);
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        }
      }, 100),
    [language, setSearchResults]
  );

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
    setIsSearchResultsVisible(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      setIsSearchResultsVisible(false);
    }, 200);
  };

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
          "flex gap-x-2 grow relative bg-background-base border border-border shadow-[inset_0_0_0_1px_transparent] hover:border-border-interactive focus-within:border-progressive hover:focus-within:border-progressive transition-[background-color,color,border-color,box-shadow]",
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
          <Icons.Search
            color={
              isFocused
                ? "var(--color-text-base)"
                : "var(--color-border-interactive)"
            }
          />
        </span>
        <input
          type="search"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search Wikipedia"
          className={Utils.cx([
            "w-full py-1 pr-2 placeholder:text-border-interactive focus:ring-1 focus:outline-none focus:ring-inset focus:ring-progressive",
            {
              "pl-9": !showResults,
              "pl-[60px]": showResults,
            },
          ])}
        />
      </div>
      <div className="rounded-r-sm border-r border-y border-border">
        <Ui.Buttons.ButtonNormalNeutral
          label="Search"
          className="border-none"
        />
      </div>
    </div>
  );
}
