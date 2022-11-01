import Head from "next/head";

type Props = {
  title: string,
  keywords: string,
  description: string,
};
const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Daniel Bencz" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <base target="_blank"></base>
    </Head>
  );
};

const defaultProps: Props = {
  title: "My First Next",
  keywords: "next.js, danibencz",
  description: "A Next.Js Practice App",
};
Meta.defaultProps = defaultProps;

export default Meta;
