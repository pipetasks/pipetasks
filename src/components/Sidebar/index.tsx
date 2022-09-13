import { ContainerColumn, ContainerRow } from '../../assets/containers';
import { Text } from '../../assets/reusableItens';
import { MdMenuOpen } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

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
      <ContainerRow
        as="header"
        borderBottom="1px solid var(--gray-800)"
        align="center"
        justify="space-between"
        padding="0 2rem"
        width="100%"
        height="5.438rem"
      >
        <Text color="var(--black-800)" variant="texting3">
          Dashboard
        </Text>
        <MdMenuOpen color="var(--gray-800)" fontSize="1.5rem" />
      </ContainerRow>

      <ContainerColumn
        align="center"
        gap="1.5rem"
        padding="0 2rem"
        width="100%"
      >
        <ContainerRow
          justify="space-between"
          padding="0 1rem"
          width="100%"
          borderBottom="solid 1px var(--gray-200)"
          height="5.438rem"
          align="center"
        >
          <ContainerRow
            background="blue"
            width="56px"
            height="56px"
            borderRadius="100%"
          />
          <ContainerColumn align="flex-start">
            <Text variant="texting5" color="var(--black-800)">
              Natalia Nunes
            </Text>
            <Text variant="texting7" color="var(--gray-600)">
              Advogada
            </Text>
          </ContainerColumn>
        </ContainerRow>
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
