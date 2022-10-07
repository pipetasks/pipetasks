// Next
import { Span, Text } from '../../assets/reusableItens';
import Link from 'next/link';
import Head from 'next/head';

// Form
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import { Input } from '../../components/Input';

// Types
import type { NextPage } from 'next';
import type { RootState } from '../../redux/store';

// Styles
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { SignInContainer, SignInContent, SignInHero } from './styles';
import { ContainerColumn, ContainerRow } from '../../assets/containers';

// Context
import { AuthenticationContext } from '../../context/AuthContext';

// React
import { useState, useContext } from 'react';
import { ErrorModal } from '../../components/ErrorModal/ErrorModal';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { setError } from '../../redux/slices/error/errorSlice';

interface FormLoginInputs {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const Login: NextPage = () => {

  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.error)
  const { register, handleSubmit, formState } = useForm<FormLoginInputs>({
    resolver: yupResolver(loginFormSchema),
  });
  const { signIn } = useContext(AuthenticationContext);
  const { errors } = formState;

  const handleSignIn: SubmitHandler<FormLoginInputs> = async (data: FormLoginInputs) => {
    const result = await signIn(data);
    if (result.error && result.message) {
      dispatch(setError({ message: result.message }))
    }
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

      <SignInContainer height="100vh" as="main">
        <SignInHero as="section" width="100%" height="100%" />
        {error && (
          <ErrorModal/>
        )}
        <SignInContent
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
              onSubmit={handleSubmit(handleSignIn)}
            >
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.email
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="email"
                    placeholder="E-mail"
                    error={errors.email}
                    {...register('email')}
                  />
                  <HiOutlineMail
                    color={!!errors.email ? 'var(--red)' : 'var(--black-800)'}
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.email && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.email.message}
                  </Text>
                )}
              </ContainerColumn>
              <ContainerColumn gap="5px" align="flex-start">
                <ContainerRow
                  width="17.5rem"
                  padding="0 0 0 4px"
                  borderBottom={
                    !!errors.password
                      ? 'solid 2px var(--red)'
                      : 'solid 2px var(--black-800)'
                  }
                  align="center"
                  justify="space-between"
                >
                  <Input
                    type="password"
                    placeholder="Senha"
                    error={errors.password}
                    {...register('password')}
                  />
                  <HiOutlineLockClosed
                    color={
                      !!errors.password ? 'var(--red)' : 'var(--black-800)'
                    }
                    font-size="1.125rem"
                  />
                </ContainerRow>
                {!!errors.password && (
                  <Text
                    variant="texting8"
                    color="var(--red)"
                    align="left"
                    padding="0 0 0 4px"
                  >
                    {errors.password.message}
                  </Text>
                )}
              </ContainerColumn>
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
        </SignInContent>
      </SignInContainer>
    </>
  );
};

export default Login;
