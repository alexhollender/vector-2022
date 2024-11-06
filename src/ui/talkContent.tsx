import * as Context from "@/lib/context";

export default function TalkContent() {
  const { talkContent } = Context.useGlobalContext();

  return (
    <div
      className="mw-body mw-body-content"
      dangerouslySetInnerHTML={{ __html: talkContent }}
    />
  );
}
