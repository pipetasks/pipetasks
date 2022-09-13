import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

interface TestForm {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<TestForm>();

  const onSubmit: SubmitHandler<TestForm> = (data) => {
    console.log(data);
  };

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
      <Link href="/entrar">
        <button>Página de login</button>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register('email')}
        />

        <input type="password" {...register('password')} placeholder="senha" />

        <button type="submit">Testando aqui </button>
      </form>
    </>
  );
};

export default Home;
