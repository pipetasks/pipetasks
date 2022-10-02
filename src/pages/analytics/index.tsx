// Next
import type { NextPage } from 'next';
import Head from 'next/head';

// Styles
import { ContainerRow } from '../../assets/containers';

// Container
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

// Context
import { useThemeContext } from '../../context/themeContext';

// HOC
import { withAuth } from '../../helper/withAuth';

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

export const getServerSideProps = withAuth( async (ctx) => {
  return { props: {}}
}) 

export default Analytics;
