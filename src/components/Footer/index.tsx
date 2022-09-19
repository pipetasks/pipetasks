import Link from 'next/link';
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePieChart,
} from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ContainerRow } from '../../assets/containers';
import { useThemeContext } from '../../context/themeContext';
import { SideFooterContainer } from './styles';

interface FooterProps {}

const Footer = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <SideFooterContainer
      width="100%"
      height="5rem"
      background={theme.colors.background}
      borderTop="solid 1px var(--gray-800)"
      align="center"
      justify="space-between"
      padding="0 2.5rem"
    >
      <ContainerRow gap="0.75rem">
        <Link href="/dashboard">
          <a>
            <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
          </a>
        </Link>
        <Link href="/analytics">
          <a>
            <AiOutlinePieChart fontSize="1.5rem" color="var(--blue)" />
          </a>
        </Link>
      </ContainerRow>
      <AiOutlineMenu fontSize="1.5rem" color="var(--blue)" />
      <ContainerRow gap="0.75rem">
        {theme.name === 'light' ? (
          <MdOutlineLightMode
            fontSize="1.5rem"
            color="var(--blue)"
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineDarkMode
            fontSize="1.5rem"
            onClick={toggleTheme}
            color="var(--blue)"
          />
        )}

        <Link href="/configuracoes">
          <a>
            <GoSettings fontSize="1.5rem" color="var(--blue)" />
          </a>
        </Link>
      </ContainerRow>
    </SideFooterContainer>
  );
};

export default Footer;
