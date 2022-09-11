import Head from 'next/head';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

interface LoginProps {}

const Login = (): LoginProps => {
  const variants = {
    texting1: {
      size: '2.25rem',
      weight: 600,
    },
    texting2: {
      size: '1.5rem',
      weight: 400,
    },
    texting3: {
      size: '1.5rem',
      weight: 700,
    },
  };

  const sizes = {
    '48px': '3rem',
    '36px': '2.25rem',
    '26px': '1.625rem',
    '24px': '1.5rem',
    '20px': '1.25rem',
    '16px': '1rem',
    '12px': '0.75rem',
    '10px': '0.625rem',
  };

  console.log(variants['texting1'].weight);

  return (
    <>
      <Head>
        <title>Pipe Tasks</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>

      <ContainerRow>
        <ContainerColumn>
          <img src="" alt="Imagem" />
          <h1>
            Mantenha sua vida mais simples e gerencie as tarefas da sua equipe
          </h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h2>
        </ContainerColumn>

        <ContainerColumn>
          <img src="Logo" alt="Logo" />
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button>Entrar</button>

          <p>Esqueci minha Senha</p>
          <p>
            Ainda não tem uma conta? <span>Crie agora</span>
          </p>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Login;
