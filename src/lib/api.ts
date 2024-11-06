export async function getPageContents(
  title: string,
  lang: string,
  type: RouteType
): Promise<PageData> {
  const pageTitle = type === "talk" ? `Talk:${title}` : title;

  try {
    const [contentData, tocData] = await Promise.all([
      fetch(
        `https://${lang}.wikipedia.org/w/api.php?${new URLSearchParams({
          action: "parse",
          format: "json",
          origin: "*",
          page: pageTitle,
          prop: "text",
          formatversion: "2",
        })}`
      ),
      fetch(
        `https://${lang}.wikipedia.org/w/api.php?${new URLSearchParams({
          action: "parse",
          format: "json",
          origin: "*",
          page: pageTitle,
          redirects: "1",
          prop: "sections",
        })}`
      ),
    ]);

    if (!contentData.ok || !tocData.ok) {
      throw new Error(
        `HTTP error! status: ${contentData.status || tocData.status}`
      );
    }

    const [content, toc] = await Promise.all([
      contentData.json(),
      tocData.json(),
    ]);

    return {
      content: content.parse.text,
      tableOfContents: toc.parse?.sections || [],
    };
  } catch (error) {
    console.error(`Error fetching ${type} page:`, error);
    return { content: "", tableOfContents: [] };
  }
}

export async function searchWiki(
  searchTerm: string,
  lang: string = "en"
): Promise<SearchResult[]> {
  if (!searchTerm.trim()) return [];

  const url = `https://${lang}.wikipedia.org/w/api.php?${new URLSearchParams({
    format: "json",
    origin: "*",
    formatversion: "2",
    action: "query",
    prop: "pageimages|description",
    generator: "prefixsearch",
    pilicense: "any",
    piprop: "thumbnail",
    pithumbsize: "160",
    gpssearch: searchTerm,
  })}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data = await response.json();

  if (!data.query?.pages) return [];

  return Object.values(data.query.pages).sort(
    (a: any, b: any) => a.index - b.index
  ) as SearchResult[];
}
