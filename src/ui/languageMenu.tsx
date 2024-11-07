import * as Ui from "@/ui";

export default function LanguageMenuContents() {
  return (
    <>
      <menu>
        <Ui.Menus.MenuSectionColumns
          heading="Suggested languages"
          column1Items={[
            { label: "Arabic", href: "/wiki/ماء?lang=ar" },
            { label: "Bengali", href: "/wiki/জল?lang=bn" },
            { label: "Bulgarian", href: "/wiki/Вода?lang=bg" },
            { label: "Catalan", href: "/wiki/Aigua?lang=ca" },
            { label: "Chinese", href: "/wiki/水?lang=zh" },
            { label: "Croatian", href: "/wiki/Voda?lang=hr" },
            { label: "Czech", href: "/wiki/Voda?lang=cs" },
            { label: "Danish", href: "/wiki/Vand?lang=da" },
            { label: "Dutch", href: "/wiki/Water?lang=nl" },
            { label: "English", href: "/wiki/Water?lang=en" },
          ]}
          column2Items={[
            { label: "Finnish", href: "/wiki/Vesi?lang=fi" },
            { label: "French", href: "/wiki/Eau?lang=fr" },
            { label: "German", href: "/wiki/Wasser?lang=de" },
            { label: "Greek", href: "/wiki/Νερό?lang=el" },
            { label: "Hebrew", href: "/wiki/מים?lang=he" },
            { label: "Hindi", href: "/wiki/जल?lang=hi" },
            { label: "Hungarian", href: "/wiki/Víz?lang=hu" },
            { label: "Indonesian", href: "/wiki/Air?lang=id" },
            { label: "Italian", href: "/wiki/Acqua?lang=it" },
            { label: "Japanese", href: "/wiki/水?lang=ja" },
          ]}
          column3Items={[
            { label: "Korean", href: "/wiki/물?lang=ko" },
            { label: "Lithuanian", href: "/wiki/Vanduo?lang=lt" },
            { label: "Malay", href: "/wiki/Air?lang=ms" },
            { label: "Norwegian", href: "/wiki/Vann?lang=no" },
            { label: "Persian", href: "/wiki/آب?lang=fa" },
            { label: "Polish", href: "/wiki/Woda?lang=pl" },
            { label: "Portuguese", href: "/wiki/Água?lang=pt" },
            { label: "Romanian", href: "/wiki/Apă?lang=ro" },
            { label: "Russian", href: "/wiki/Вода?lang=ru" },
            { label: "Serbian", href: "/wiki/Вода?lang=sr" },
          ]}
          column4Items={[
            { label: "Slovak", href: "/wiki/Voda?lang=sk" },
            { label: "Slovenian", href: "/wiki/Voda?lang=sl" },
            { label: "Spanish", href: "/wiki/Agua?lang=es" },
            { label: "Swedish", href: "/wiki/Vatten?lang=sv" },
            { label: "Tamil", href: "/wiki/நீர்?lang=ta" },
            { label: "Thai", href: "/wiki/น้ำ?lang=th" },
            { label: "Turkish", href: "/wiki/Su?lang=tr" },
            { label: "Ukrainian", href: "/wiki/Вода?lang=uk" },
            { label: "Vietnamese", href: "/wiki/Nước?lang=vi" },
            { label: "Welsh", href: "/wiki/Dŵr?lang=cy" },
          ]}
        />
      </menu>
    </>
  );
}
