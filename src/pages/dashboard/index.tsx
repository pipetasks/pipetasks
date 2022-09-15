import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import { useTheme } from 'styled-components';
import Header from '../../components/Header';
import TasksWeekly from '../../components/TasksWeekly';

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
        <ContainerColumn width="100%">
          <Header />
          <ContainerColumn align="center" padding="2rem" gap="1rem">
            <TasksWeekly />
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export default Dashboard;
