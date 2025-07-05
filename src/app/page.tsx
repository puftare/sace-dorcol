import Main from "@/pages/Main";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Saće · Dorćol</title>
        <meta
          name="description"
          content="Saće Dorćol is a modern, minimalistic caffe showcasing local art, culture and drinks in the heart of Dorćol, Belgrade."
        />
      </Head>
      <Main />
    </>
  );
}
