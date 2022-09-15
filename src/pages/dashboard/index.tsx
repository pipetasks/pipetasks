import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import { useTheme } from 'styled-components';

interface DashboardProps {}

const Dashboard = (): DashboardProps => {
  const theme = useTheme();

  console.log(theme);

  return (
    <>
      <Head>
        <title>Pipe Tasks - Dashboard</title>
        <meta
          name="description"
          content="Adiucionar uma descrição maneira para a página home"
        />
      </Head>
      <ContainerRow background={theme.colors.background}>
        <Sidebar />
      </ContainerRow>
    </>
  );
};

export default Dashboard;
