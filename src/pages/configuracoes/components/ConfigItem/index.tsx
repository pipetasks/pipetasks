import { ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { ContainerColumn, ContainerRow } from '../../../../assets/containers';
import { Text } from '../../../../assets/reusableItens';

interface ConfigItemProps {
  item: string;
  description?: string;
  children?: ReactNode;
}

const ConfigItem = ({ item, description, children }: ConfigItemProps) => {
  const theme = useTheme();
  return (
    <ContainerColumn width="100%" gap="8px" align="flex-start">
      <Text variant="texting7" color="var(--gray-700)" as="p">
        {item}
      </Text>
      {!!description && (
        <Text variant="texting6" color={theme.colors.title} as="p">
          {description}
        </Text>
      )}
      {!!children && children}
      <ContainerRow
        width="100%"
        height="2px"
        background={theme.colors.divider}
      />
    </ContainerColumn>
  );
};

export default ConfigItem;
