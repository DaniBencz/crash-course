import { useRouter } from "next/router";
import Link from "next/link";

const Article = ({ article }) => {
  // router is just an example here for how it is used
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br/>
      <Link href={'/'}>Back</Link>
    </>
  );
};

// fetch at each request, won't work for fully static sites
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    // gets passed to components as props within the module
    props: { article },
  };
};

export default Article;
