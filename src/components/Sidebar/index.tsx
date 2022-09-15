import { ContainerColumn } from '../../assets/containers';
import Link from 'next/link';
import NavInfo from './NavInfo';
import NavSection from './NavSection';
import NavHeader from './NavHeader';
import NavLink from './NavLink';
import { AiOutlineHome, AiOutlinePieChart } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { BsCheckAll } from 'react-icons/bs';

const Sidebar = () => {
  const teste = 0;
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

        <NavSection title="dashboards">
          <NavLink title="Home" notifications={1} href="/dashboard">
            <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Analytics" notifications={12} href="/analytics">
            <AiOutlinePieChart fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink
            title="Configurações"
            notifications={teste}
            href="/configuracoes"
          >
            <GoSettings fontSize="1.5rem" color="var(--blue)" rotate="180deg" />
          </NavLink>
        </NavSection>

        <NavSection title="projetos">
          <NavLink title="Analytics" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Analytics" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Analytics" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
        </NavSection>
      </ContainerColumn>
      <Link href="/configuracoes">
        <a>Configuracoes</a>
      </Link>
    </ContainerColumn>
  );
};

export default Sidebar;
