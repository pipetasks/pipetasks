import { ContainerColumn, ContainerRow } from '../../assets/containers';

// Head Config
import Head from 'next/head';

// React
import { useContext } from 'react';

// Components
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TasksWeekly from '../../components/TasksWeekly';
import ProjectsWeekly from '../../components/ProjectsWeekly';

// Styles
import { Text } from '../../assets/reusableItens';
import { DashboardContainer } from './styles';
import { useThemeContext } from '../../context/themeContext';

// Redux
import { useSelector } from "react-redux"

// Types
import type { RootState } from '../../redux/store';

// HOC
import { withAuth } from '../../helper/withAuth';

const Dashboard = () => {

  const { theme } = useThemeContext();

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
  )
}

export const getServerSideProps = withAuth( async (ctx) => {
  return { props: {} }
})

export default Dashboard;
