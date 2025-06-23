"use client";

import * as React from "react";
import Image from "next/image";
import * as Ui from "@/ui";
import * as Icons from "@/icons/icons";

import wordmark from "../../../public/images/wordmark-en.svg";

const StickySectionHeadersPage = () => {
  return (
    <div className="-mx-6">
      <header className="h-[55px] px-6 bg-[#eaecf0] flex items-center gap-x-3">
        <Ui.Buttons.IconButton
          className="-ml-1.5 opacity-80"
          icon={<Icons.Menu />}
        />
        <Image
          src={wordmark}
          width={120}
          alt="Wikipedia wordmark"
          className="opacity-80"
        />
      </header>
      <main className="px-6">
        <section className="mt-8 text-base flex flex-col gap-y-4">
          <h1 className="text-[28px]">Article title</h1>
          <Content />
        </section>
        <CollapsibleSection title="Section 1" />
        <CollapsibleSection title="Section 2" />
        <CollapsibleSection title="Section 3" />
        <CollapsibleSection title="Section 4" />
        <CollapsibleSection title="Section 5" />
        <CollapsibleSection title="Section 6" />
        <CollapsibleSection title="Section 7" />
        <CollapsibleSection title="Section 8" />
        <CollapsibleSection title="Section 9" />
        <CollapsibleSection title="Section 10" />
      </main>
    </div>
  );
};

export default StickySectionHeadersPage;

const CollapsibleSection = ({ title }: { title: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <section className="mt-4 pb-2 relative text-base border-b border-[#dadde3]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-12 flex items-center gap-x-2 cursor-pointer sticky top-0 bg-white"
      >
        <div className={`w-4 h-4 ${isExpanded ? "-rotate-90" : "rotate-90"}`}>
          <Icons.ExpandCollapseTocSection />
        </div>
        <h2 className="text-2xl font-serif">{title}</h2>
      </button>
      <div className={`flex-col gap-y-4 ${isExpanded ? "flex" : "hidden"}`}>
        <ContentLong />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <>
      <p>
        Britney Jean Spears (born December 2, 1981) is an American singer.
        Dubbed the "Princess of Pop", she is known for reviving teen pop and her
        influence on pop music and culture in the 21st century. Spears has sold
        150 million records worldwide, making her one of the best-selling music
        artists of all time.
      </p>
      <p>
        Spears signed with Jive Records in 1997 and rose to fame with her teen
        pop-imbued first two studio albums, ...Baby One More Time (1999) and
        Oops!... I Did It Again (2000). Both rank amongst the best-selling
        albums of all time, with the former yielding the U.S. Billboard Hot 100
        number-one single "...Baby One More Time", one of the best-selling
        singles in history. Adopting a more mature and provocative image, she
        released the pop albums Britney (2001) and In the Zone (2003). Public
        scrutiny and personal challenges influenced the electropop record
        Blackout (2007), which Spears executive produced; it is often considered
        her best work and a "pop bible". Her following electropop albums Circus
        (2008) and Femme Fatale (2011) spawned the U.S. number-one singles
        "Womanizer" and "Hold It Against Me". Spears embarked on a 2013–2017
        concert residency to promote her next two albums, Britney Jean (2013)
        and Glory (2016).
      </p>
    </>
  );
};

const ContentLong = () => {
  return (
    <>
      <p>
        Britney Jean Spears (born December 2, 1981) is an American singer.
        Dubbed the "Princess of Pop", she is known for reviving teen pop and her
        influence on pop music and culture in the 21st century. Spears has sold
        150 million records worldwide, making her one of the best-selling music
        artists of all time.
      </p>
      <p>
        Spears signed with Jive Records in 1997 and rose to fame with her teen
        pop-imbued first two studio albums, ...Baby One More Time (1999) and
        Oops!... I Did It Again (2000). Both rank amongst the best-selling
        albums of all time, with the former yielding the U.S. Billboard Hot 100
        number-one single "...Baby One More Time", one of the best-selling
        singles in history. Adopting a more mature and provocative image, she
        released the pop albums Britney (2001) and In the Zone (2003). Public
        scrutiny and personal challenges influenced the electropop record
        Blackout (2007), which Spears executive produced; it is often considered
        her best work and a "pop bible". Her following electropop albums Circus
        (2008) and Femme Fatale (2011) spawned the U.S. number-one singles
        "Womanizer" and "Hold It Against Me". Spears embarked on a 2013–2017
        concert residency to promote her next two albums, Britney Jean (2013)
        and Glory (2016).
      </p>
      <p>
        Spears signed with Jive Records in 1997 and rose to fame with her teen
        pop-imbued first two studio albums, ...Baby One More Time (1999) and
        Oops!... I Did It Again (2000). Both rank amongst the best-selling
        albums of all time, with the former yielding the U.S. Billboard Hot 100
        number-one single "...Baby One More Time", one of the best-selling
        singles in history. Adopting a more mature and provocative image, she
        released the pop albums Britney (2001) and In the Zone (2003). Public
        scrutiny and personal challenges influenced the electropop record
        Blackout (2007), which Spears executive produced; it is often considered
        her best work and a "pop bible". Her following electropop albums Circus
        (2008) and Femme Fatale (2011) spawned the U.S. number-one singles
        "Womanizer" and "Hold It Against Me". Spears embarked on a 2013–2017
        concert residency to promote her next two albums, Britney Jean (2013)
        and Glory (2016).
      </p>
      <p>
        Spears signed with Jive Records in 1997 and rose to fame with her teen
        pop-imbued first two studio albums, ...Baby One More Time (1999) and
        Oops!... I Did It Again (2000). Both rank amongst the best-selling
        albums of all time, with the former yielding the U.S. Billboard Hot 100
        number-one single "...Baby One More Time", one of the best-selling
        singles in history. Adopting a more mature and provocative image, she
        released the pop albums Britney (2001) and In the Zone (2003). Public
        scrutiny and personal challenges influenced the electropop record
        Blackout (2007), which Spears executive produced; it is often considered
        her best work and a "pop bible". Her following electropop albums Circus
        (2008) and Femme Fatale (2011) spawned the U.S. number-one singles
        "Womanizer" and "Hold It Against Me". Spears embarked on a 2013–2017
        concert residency to promote her next two albums, Britney Jean (2013)
        and Glory (2016).
      </p>
    </>
  );
};
