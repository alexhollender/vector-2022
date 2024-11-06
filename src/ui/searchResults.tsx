import * as Context from "@/lib/context";
import * as Icons from "@/icons/icons";

import Link from "next/link";
import Image from "next/image";

export default function SearchResults() {
  const { searchResults, isSearchResultsVisible } = Context.useGlobalContext();

  if (!searchResults.length || !isSearchResultsVisible) return null;

  return (
    <div className="absolute top-[34px] z-50 w-[calc(100%-72px)] bg-white border border-border focus-within:outline-none rounded-b-sm shadow">
      {searchResults.map((result) => (
        <Link
          href={`/${encodeURIComponent(result.title)}`}
          key={result.pageid}
          className="flex items-center gap-2 py-2 px-3 hover:bg-background-subtle no-underline hover:no-underline"
        >
          <div className="w-10 h-10 flex items-center justify-center [&:has(>svg)]:bg-background-subtle border border-background-disabled rounded-sm">
            {result.thumbnail ? (
              <Image
                src={result.thumbnail.source}
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            ) : (
              <Placeholder />
            )}
          </div>
          <div>
            <h3 className="text-text-base">{result.title}</h3>
            {result.description && (
              <p className="text-sm text-text-subtle">{result.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

const Placeholder = () => {
  return <Icons.Image color="#72777d" />;
};
