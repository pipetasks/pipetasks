import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pipe Tasks</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>

      <section>Criar uma página home</section>
      <Link href="/login">
        <button>Página de login</button>
      </Link>
    </>
  );
};

export default Home;
