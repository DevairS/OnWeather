import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
