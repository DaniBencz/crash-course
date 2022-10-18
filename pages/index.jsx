import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App - Home</title>
        <meta name='keywords' content='cool stuff'></meta>
      </Head>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
}
