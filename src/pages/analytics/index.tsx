import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ContainerRow } from '../../assets/containers';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import { useThemeContext } from '../../context/themeContext';

const Analytics: NextPage = () => {
  const { theme } = useThemeContext();
  return (
    <>
      <Head>
        <title>Pipe Tasks</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>

      <ContainerRow background={theme.colors.background}>
        <Sidebar />
        <Footer />
      </ContainerRow>
    </>
  );
};

export default Analytics;
