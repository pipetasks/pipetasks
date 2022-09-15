import { ContainerColumn } from '../../assets/containers';

import Link from 'next/link';
import NavInfo from './NavInfo';
import NavSection from './NavSection';
import NavHeader from './NavHeader';

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
      <NavHeader />

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
