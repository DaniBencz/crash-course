import Head from "next/head";
import ArticleList from "../components/ArticleList";

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>Next App - Home</title>
        <meta name="keywords" content="cool stuff"></meta>
      </Head>
    <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

// fetch at build-time
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    // gets passed to components as props within the module
    props: { articles },
  };
};

export default Home;
