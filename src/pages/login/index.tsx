import Head from 'next/head';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

interface LoginProps {}

const Login = (): LoginProps => {
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
