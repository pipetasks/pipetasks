import Head from 'next/head';
import Link from 'next/link';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Span, Text } from '../../assets/reusableItens';

import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { Input } from '../../components/Input';

interface LoginProps {}

interface FormInputs {
  email: string;
  password: string;
}

const Login = (): LoginProps => {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
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

      <ContainerRow height="100vh" as="main">
        <ContainerColumn
          as="section"
          background="var(--gray-400)"
          width="100%"
          gap="3.5rem"
          align="center"
          justify="center"
        >
          <img src="" alt="Imagem" />
          <ContainerColumn mw="32.68rem" gap="0.75rem">
            <Text variant="texting1" align="left">
              Mantenha sua vida mais simples e gerencie as tarefas da sua equipe
            </Text>
            <Text variant="texting6" as="h3" align="left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </ContainerColumn>
        </ContainerColumn>

        <ContainerColumn
          width="36.375rem"
          as="section"
          gap="2rem"
          align="center"
          justify="center"
        >
          <img src="Logo" alt="Logo" />
          <ContainerColumn gap="1rem" align="center">
            <Text variant="texting2">Faça seu login</Text>
            <ContainerColumn
              gap="1.5rem"
              align="center"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <ContainerRow
                width="21rem"
                padding="0 0 0 4px"
                borderBottom="solid 2px var(--black-800)"
                align="center"
                justify="space-between"
              >
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register('email')}
                />
                <HiOutlineMail color="var(--black-800)" font-size="1.125rem" />
              </ContainerRow>
              <ContainerRow
                width="21rem"
                padding="0 0 0 4px"
                borderBottom="solid 2px var(--black-800)"
                align="center"
                justify="space-between"
              >
                <Input
                  type="password"
                  placeholder="Senha"
                  {...register('password')}
                />
                <HiOutlineLockClosed
                  color="var(--black-800)"
                  font-size="1.125rem"
                />
              </ContainerRow>
              <button type="submit">Entrar</button>
            </ContainerColumn>
          </ContainerColumn>

          <ContainerColumn align="center" gap="2rem">
            <Text as="p" variant="texting6">
              Esqueci minha Senha
            </Text>
            <ContainerRow gap="0.75rem" align="center">
              <Text as="p" variant="texting7">
                Ainda não tem uma conta?
              </Text>
              <Link href="/cadastro">
                <a>
                  <Span variant="texting8">Crie agora</Span>
                </a>
              </Link>
            </ContainerRow>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Login;
