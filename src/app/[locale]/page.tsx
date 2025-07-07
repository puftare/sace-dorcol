import Main from "@/pages/Main";
import Head from "next/head";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("hero");
  return (
    <>
      <Head>
        <title>{t("title")}asdadss</title>
        <meta
          name="description"
          content="Saće Dorćol is a modern, minimalistic caffe showcasing local art, culture and drinks in the heart of Dorćol, Belgrade."
        />
      </Head>

      <Main />
    </>
  );
}
