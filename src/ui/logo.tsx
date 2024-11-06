import Link from "next/link";
import Image from "next/image";
import globe from "../../public/images/globe.png";
import wordmark from "../../public/images/wordmark-en.svg";
import tagline from "../../public/images/tagline-en.svg";

export default function Logo() {
  return (
    <Link
      href="/Zebra"
      className="flex gap-x-[10px] items-center ml-[14px] min-w-[180px]"
    >
      <Image src={globe} width={50} height={50} alt="Wikipedia Globe" />
      <div className="flex flex-col items-center gap-y-[5px]">
        <Image
          src={wordmark}
          width={119}
          height={18}
          alt="Wikipedia wordmark"
        />
        <Image src={tagline} width={117} height={13} alt="Wikipedia tagline" />
      </div>
    </Link>
  );
}
