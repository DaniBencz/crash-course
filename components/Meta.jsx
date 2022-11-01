import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Daniel Bencz" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./favicon.ico"></link>
      <base target="_blank"></base>
    </Head>
  );
};

Meta.defaultProps = {
  title: "My First Next",
  keywords: "next.js, danibencz",
  description: "A Next.Js Practice App",
};

export default Meta;
