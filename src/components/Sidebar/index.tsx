import { ContainerColumn } from '../../assets/containers';
import NavInfo from './NavInfo';
import NavSection from './NavSection';
import NavHeader from './NavHeader';
import NavLink from './NavLink';
import { AiOutlineHome, AiOutlinePieChart } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { BsCheckAll } from 'react-icons/bs';
import { SideBarContainer } from './styles';
import { useState } from 'react';

const Sidebar = () => {
  const [sideOpen, setSideOpen] = useState(true);

  const handleSideOpen = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <SideBarContainer
      align="center"
      gap="1.5rem"
      borderRight="1px solid var(--gray-800)"
      as="aside"
      open={sideOpen}
    >
      <NavHeader handleSideOpen={handleSideOpen} open={sideOpen} />

      <ContainerColumn
        align="center"
        gap="1.5rem"
        padding={sideOpen ? '0 2rem' : '0 0.25rem'}
        width="100%"
      >
        <NavInfo open={sideOpen} />

        <NavSection title="dashboards" open={sideOpen}>
          <NavLink title="Home" notifications={1} href="/dashboard">
            <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Analytics" notifications={12} href="/analytics">
            <AiOutlinePieChart fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink
            title="Configurações"
            notifications={13}
            href="/configuracoes"
          >
            <GoSettings fontSize="1.5rem" color="var(--blue)" rotate="180deg" />
          </NavLink>
        </NavSection>

        <NavSection title="projetos" open={sideOpen}>
          <NavLink title="Projeto1" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Projeto12" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
          <NavLink title="Projeto13" notifications={12} href="/dashboard">
            <BsCheckAll fontSize="1.5rem" color="var(--blue)" />
          </NavLink>
        </NavSection>
      </ContainerColumn>
    </SideBarContainer>
  );
};

export default Sidebar;
