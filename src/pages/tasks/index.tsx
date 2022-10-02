import { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Task from '../../components/TasksWeekly/Task';
import { withAuth } from '../../helper/withAuth';

interface TasksProps {}

const Tasks: NextPage = () => {
  const data = [
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
    {
      _id: '631c4as54d21as',
      userId: '354412a1s54s',
      title: 'Titulo da Task',
      description: 'lorem ipsum task done example taks lorem ipsum feito',
      createdAt: new Date(),
      finished: {
        status: false,
        at: new Date(2022, 12, 10),
      },
    },
  ];

  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Pipe Tasks - Tasks</title>
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
            align="flex-start"
            padding="2rem"
            gap="3rem"
            width="100%"
            height="100%"
          >
            <Text variant="texting3" color={theme.colors.tasks.color}>
              Suas tarefas
            </Text>
            {data.map((task) => (
              <Task key={task._id} title={task.title} />
            ))}
          </ContainerColumn>
        </ContainerColumn>
      </ContainerRow>
    </>
  );
};

export const getServerSideProps = withAuth( async (ctx) => {
  return { props: {}}
})

export default Tasks;
