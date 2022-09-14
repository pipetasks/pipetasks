import Head from 'next/head';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Span, Text } from '../../assets/reusableItens';
import { IoPersonOutline } from 'react-icons/io5';
import { Input } from '../../components/Input';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';

interface FormRegisterInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormRegisterInputs>();

  const handleSignUp: SubmitHandler<FormRegisterInputs> = (
    data: FormRegisterInputs
  ) => {
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
          width="36.375rem"
          as="section"
          gap="2rem"
          align="center"
          justify="center"
        >
          <img src="Logo" alt="Logo" />
          <ContainerColumn gap="1rem" align="center">
            <Text variant="texting2">Registre-se agora</Text>
            <ContainerColumn
              gap="1.5rem"
              align="center"
              as="form"
              onSubmit={handleSubmit(handleSignUp)}
            >
              <ContainerRow
                width="21rem"
                padding="0 0 0 4px"
                borderBottom="solid 2px var(--black-800)"
                align="center"
                justify="space-between"
              >
                <Input type="text" placeholder="Nome" {...register('name')} />
                <IoPersonOutline
                  color="var(--black-800)"
                  font-size="1.125rem"
                />
              </ContainerRow>
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
              <button type="submit">Registre-se</button>
            </ContainerColumn>
          </ContainerColumn>

          <ContainerColumn align="center" gap="2rem">
            <Text as="p" variant="texting6">
              Esqueci minha Senha
            </Text>
            <ContainerRow gap="0.75rem" align="center">
              <Text as="p" variant="texting7">
                Já tem uma conta?
              </Text>
              <Link href="/entrar">
                <a>
                  <Span variant="texting8">Faça login</Span>
                </a>
              </Link>
            </ContainerRow>
          </ContainerColumn>
        </ContainerColumn>

        <ContainerColumn
          as="section"
          background="var(--gray-200)"
          width="100%"
          gap="3.5rem"
          align="center"
          justify="center"
        >
          <img src="" alt="Imagem" />
          <ContainerColumn mw="32.68rem" gap="0.75rem" align="flex-end">
            <Text variant="texting1" align="right">
              Mantenha sua vida mais simples e gerencie as tarefas da sua equipe
            </Text>
            <Text variant="texting6" as="h3" align="right">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default SignUp;
