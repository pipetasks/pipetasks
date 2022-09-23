import { ReactNode } from 'react';
import { ContainerColumn, ContainerRow } from '../../../../assets/containers';
import { Text } from '../../../../assets/reusableItens';

interface ConfigItemProps {
  item: string;
  description?: string;
  children?: ReactNode;
}

const ConfigItem = ({ item, description, children }: ConfigItemProps) => {
  return (
    <ContainerColumn width="100%" gap="8px" align="flex-start">
      <Text variant="texting7" color="var(--gray-700)">
        {item}
      </Text>
      {!!description && (
        <Text variant="texting6" color="var(--black-800)">
          {description}
        </Text>
      )}
      {!!children && children}
      <ContainerRow width="100%" height="2px" background="var(--gray-200)" />
    </ContainerColumn>
  );
};

export default ConfigItem;
