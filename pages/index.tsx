import ArticleList from "../components/ArticleList";
import { GetStaticProps } from "next";
import { Article } from "../types";

type Props = { articles: Article[]; };
const Home = ({ articles }: Props) => {
  return (
    <>
      <ArticleList articles={articles}></ArticleList>
    </>
  );
};

// fetch at build-time
export const getStaticProps: GetStaticProps = async () => {
  // at build time, the hostname is unknown, so it has to be set explicitly
  const res = await fetch(`${process.env.HOST}/api/articles`);
  const articles = await res.json();

  return {
    // gets passed to components as props within the module
    props: { articles },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=4`
//   );
//   const articles = await res.json();

//   return {
//     // gets passed to components as props within the module
//     props: { articles },
//   };
// };

export default Home;
