import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/themeContext';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface SettingsProps {}

const Settings = (): SettingsProps => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>Pipe Tasks - Configurações</title>
      </Head>
      <ContainerRow background={theme.colors.background} height="100%">
        <Sidebar />
        <Footer />
        <ContainerColumn width="100%" padding="0 0 0 21.563rem">
          <Header />
          <button onClick={toggleTheme}>alterar thema aqui </button>
          <h1>{theme.name}</h1>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Settings;
