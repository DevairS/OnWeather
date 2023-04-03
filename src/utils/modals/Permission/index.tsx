import React, { FC } from 'react';
import { Linking, Modal, Platform } from 'react-native';
import { Button, ModalContainer, ModalContent, Text } from './styles';

type Props = {
  visible: boolean;
  setVisible(visible: boolean): void;
};

const PermissionAlert: FC<Props> = ({ visible, setVisible }) => {
  const onPermissionRequest = async () => {
    if (Platform.OS === 'ios') {
      await Linking.openURL('app-settings:');
    } else if (Platform.OS === 'android') {
      await Linking.openSettings();
    }
    setVisible(!visible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <ModalContainer>
        <ModalContent>
          <Text>
            Para acessar todos os benefícios do app, você precisa ativar a
            permissão de localização.
          </Text>
          <Button text="Ir para Configurações" onPress={onPermissionRequest} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default PermissionAlert;
