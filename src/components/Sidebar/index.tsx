import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import NavInfo from './NavInfo';
import NavSection from './NavSection';

const Sidebar = () => {
  return (
    <ContainerColumn
      align="center"
      gap="1.5rem"
      borderRight="1px solid var(--gray-800)"
      as="aside"
      height="100vh"
      width="21.563rem"
    >
      <HeaderNav />

      <ContainerColumn
        align="center"
        gap="1.5rem"
        padding="0 2rem"
        width="100%"
      >
        <NavInfo />
        <NavSection />
      </ContainerColumn>
      <Link href="/configuracoes">
        <a>Configuracoes</a>
      </Link>
    </ContainerColumn>
  );
};

export default Sidebar;
