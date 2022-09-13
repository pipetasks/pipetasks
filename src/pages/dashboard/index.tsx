import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { MdMenuOpen } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import Sidebar from '../../components/Sidebar';

interface DashboardProps {}

const Dashboard = (): DashboardProps => {
  return (
    <ContainerRow background="var(--white-100)">
      <Sidebar />
    </ContainerRow>
  );
};

export default Dashboard;
