import Head from 'next/head';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Span, Text } from '../../assets/reusableItens';
import { IoPersonOutline } from 'react-icons/io5';
import { Input } from '../../components/Input';
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { SignUpContainer, SignUpContent, SignUpHero } from './styles';

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

      <SignUpContainer height="100vh" as="main">
        <SignUpContent
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
                width="17.5rem"
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
                width="17.5rem"
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
                width="17.5rem"
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
        </SignUpContent>

        <SignUpHero as="section" width="100%" height="100%" />
      </SignUpContainer>
    </>
  );
};

export default SignUp;
