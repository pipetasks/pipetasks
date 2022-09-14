import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import NavInfo from './NavInfo';

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

        <ContainerColumn
          align="flex-start"
          padding="2rem 1rem"
          gap="1.5rem"
          borderBottom="solid 1px var(-gray-200)"
          width="100%"
        >
          <ContainerRow
            width="100%"
            gap="4px"
            align="center"
            justify="space-between"
          >
            <Text
              transform="uppercase"
              variant="texting5"
              color="var(--gray-900)"
            >
              dashboard
            </Text>
            <IoIosArrowUp fontSize="20px" color="var(--blue)" />
          </ContainerRow>
          <ContainerRow width="100%" align="center" justify="space-between">
            <Link href="/dashboard">
              <a>
                <ContainerRow gap="8px" align="center">
                  <AiOutlineHome fontSize="1.5rem" color="var(--blue)" />
                  <Text color="var(--black-800)" variant="texting5">
                    Home
                  </Text>
                </ContainerRow>
              </a>
            </Link>

            <Text>1</Text>
          </ContainerRow>
        </ContainerColumn>
      </ContainerColumn>
      <Link href="/configuracoes">
        <a>Configuracoes</a>
      </Link>
    </ContainerColumn>
  );
};

export default Sidebar;
