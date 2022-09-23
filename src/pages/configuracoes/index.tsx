import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import { useTheme } from 'styled-components';
import { useThemeContext } from '../../context/themeContext';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConfigSection from './components/ConfigSection';
import ConfigItem from './components/ConfigItem';
import { Button, Text } from '../../assets/reusableItens';
import { NextPage } from 'next';

interface SettingsProps {}

const Settings: NextPage = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <Head>
        <title>Pipe Tasks - Configurações</title>
      </Head>
      <ContainerRow
        background={theme.colors.background}
        height="100%"
        width="100%"
      >
        <Sidebar />
        <Footer />
        <ContainerColumn
          width="100%"
          padding="0 0 0 21.563rem"
          height="100%"
          as="main"
        >
          <Header />
          <ContainerColumn
            align="center"
            padding="2rem"
            gap="3rem"
            width="100%"
          >
            <ConfigSection title="Minha conta" subtitle="Informações Pessoais">
              <ConfigItem
                item="Informações Pessoais"
                description="natalia.nunes@gmail.com"
              />
              <ConfigItem item="Informações Pessoais">
                <input placeholder="Insira seu nome aqui " />
              </ConfigItem>
              <ConfigItem
                item="Log out"
                description="Você será desconectado de todas as sessões ativas e terá que fazer login novamente."
              >
                <Button variant="removed">Log Out</Button>
              </ConfigItem>
              <ConfigItem
                item="Deletar minha conta"
                description="Essa ação não pode ser desfeita"
              >
                <Button variant="removed">Deletar minha conta</Button>
              </ConfigItem>
            </ConfigSection>
            <ConfigSection title="Minhas configurações">
              <ConfigItem item="Aparência">
                <ContainerRow
                  align="center"
                  width="100%"
                  justify="space-between"
                >
                  <Text variant="texting6" color={theme.colors.title} as="p">
                    Customize a aparência da sua aplicação
                  </Text>
                  <select onChange={toggleTheme}>
                    <option onClick={toggleTheme}>Light</option>
                    <option onClick={toggleTheme}>Dark</option>
                  </select>
                  <button onClick={toggleTheme}>{theme.name}</button>
                </ContainerRow>
              </ConfigItem>
            </ConfigSection>
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Settings;
