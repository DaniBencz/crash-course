import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const Article = ({ article }) => {
  // example for using router
  // const router = useRouter();
  // const { id } = router.query;

  // example for client side data fetching
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);
  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  // console.log("data is", data);

  return (
    <>
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
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    // gets passed to components as props within the module
    props: { article },
  };
};

// this function is purely just to tell Next, how many routes it must generate
export const getStaticPaths = async () => {
  const paths = [
    {params: {id: '1'}}, // specify each route parameters
    {params: {id: '2'}},
    {params: {id: '3'}},
    {params: {id: '4'}},
    {params: {id: '5'}},
    // {params: {id: '6'}}, // this page will return 404
  ]

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
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
