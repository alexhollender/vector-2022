import * as Ui from "@/ui";

export default function LanguageMenuContents() {
  return (
    <>
      <menu>
        <Ui.Menus.MenuSectionColumns
          heading="Suggested languages"
          column1Items={[
            { label: "Arabic", href: "/ماء?lang=ar" },
            { label: "Bengali", href: "/জল?lang=bn" },
            { label: "Bulgarian", href: "/Вода?lang=bg" },
            { label: "Catalan", href: "/Aigua?lang=ca" },
            { label: "Chinese", href: "/水?lang=zh" },
            { label: "Croatian", href: "/Voda?lang=hr" },
            { label: "Czech", href: "/Voda?lang=cs" },
            { label: "Danish", href: "/Vand?lang=da" },
            { label: "Dutch", href: "/Water?lang=nl" },
            { label: "English", href: "/Water?lang=en" },
          ]}
          column2Items={[
            { label: "Finnish", href: "/Vesi?lang=fi" },
            { label: "French", href: "/Eau?lang=fr" },
            { label: "German", href: "/Wasser?lang=de" },
            { label: "Greek", href: "/Νερό?lang=el" },
            { label: "Hebrew", href: "/מים?lang=he" },
            { label: "Hindi", href: "/जल?lang=hi" },
            { label: "Hungarian", href: "/Víz?lang=hu" },
            { label: "Indonesian", href: "/Air?lang=id" },
            { label: "Italian", href: "/Acqua?lang=it" },
            { label: "Japanese", href: "/水?lang=ja" },
          ]}
          column3Items={[
            { label: "Korean", href: "/물?lang=ko" },
            { label: "Lithuanian", href: "/Vanduo?lang=lt" },
            { label: "Malay", href: "/Air?lang=ms" },
            { label: "Norwegian", href: "/Vann?lang=no" },
            { label: "Persian", href: "/آب?lang=fa" },
            { label: "Polish", href: "/Woda?lang=pl" },
            { label: "Portuguese", href: "/Água?lang=pt" },
            { label: "Romanian", href: "/Apă?lang=ro" },
            { label: "Russian", href: "/Вода?lang=ru" },
            { label: "Serbian", href: "/Вода?lang=sr" },
          ]}
          column4Items={[
            { label: "Slovak", href: "/Voda?lang=sk" },
            { label: "Slovenian", href: "/Voda?lang=sl" },
            { label: "Spanish", href: "/Agua?lang=es" },
            { label: "Swedish", href: "/Vatten?lang=sv" },
            { label: "Tamil", href: "/நீர்?lang=ta" },
            { label: "Thai", href: "/น้ำ?lang=th" },
            { label: "Turkish", href: "/Su?lang=tr" },
            { label: "Ukrainian", href: "/Вода?lang=uk" },
            { label: "Vietnamese", href: "/Nước?lang=vi" },
            { label: "Welsh", href: "/Dŵr?lang=cy" },
          ]}
        />
      </menu>
    </>
  );
}
