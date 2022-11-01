import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { GetStaticPaths, GetStaticProps } from "next";
import { Article } from "../../../types";

type Props = { article: Article; };
const Article = ({ article }: Props) => {
  // example for using router
  // const router = useRouter();
  // const { id } = router.query;

  // example for client side data fetching
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/articles/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);
  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No article found</p>;
  // console.log("article data:", data);

  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href={"/"}>Back</Link>
    </>
  );
};

// fetch at each request, won't work for fully static sites
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     // gets passed to components as props within the module
//     props: { article },
//   };
// };

// data fetching happens here
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    // `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    `${process.env.HOST || "localhost:3000"}/api/articles/${context?.params?.id || "1"}`
  );
  const article = await res.json();

  return {
    // gets passed to components as props within the module
    props: { article },
  };
};

// this function is purely just to tell Next, how many routes it must generate
// thus, how many times to run getStaticProps, and with what params
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { id: "1" } }, // specify each route parameters
    { params: { id: "2" } },
    { params: { id: "3" } },
    // {params: {id: '4'}}, // this page will return 404
  ];

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const res = await fetch(`${process.env.HOST}/api/articles`);
  // const articles = await res.json();
  // const paths = articles
  //   .map((article) => article.id)
  //   .map((id) => ({
  //     params: {
  //       id: id.toString(),
  //     },
  //   }));

  return {
    paths,
    fallback: false, // false returns 404, true throws error
  };
};

export default Article;
