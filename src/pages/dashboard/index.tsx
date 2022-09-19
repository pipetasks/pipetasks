import { ContainerColumn, ContainerRow } from '../../assets/containers';
import Sidebar from '../../components/Sidebar';
import Head from 'next/head';
import { useTheme } from 'styled-components';
import Header from '../../components/Header';
import TasksWeekly from '../../components/TasksWeekly';
import { Text } from '../../assets/reusableItens';
import ProjectsWeekly from '../../components/ProjectsWeekly';
import { DashboardContainer } from './styles';
import Footer from '../../components/Footer';

interface DashboardProps {}

const Dashboard = (): DashboardProps => {
  const theme = useTheme();

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
        <Footer />
        <DashboardContainer width="100%" padding="0 0 0 21.563rem" as="main">
          <Header />
          <ContainerColumn align="center" padding="2rem" gap="1rem">
            <TasksWeekly />
            <ContainerColumn
              background={theme.colors.tasks.background}
              gap="2rem"
              padding="1rem 1.5rem"
              align="center"
              borderRadius="1.5rem"
              width="100%"
              height="384px"
            >
              <Text color={theme.colors.title}>Tarefas Concluídas</Text>
            </ContainerColumn>

            <ProjectsWeekly />
          </ContainerColumn>
        </DashboardContainer>
      </ContainerRow>
    </>
  );
};

export default Dashboard;
