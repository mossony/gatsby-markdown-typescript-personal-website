import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  ${tw`border-b -mb-px`};
  background-color: #121212; // Primary background color
  border-color: #2A2A2A; // Primary border color
`;

export const Wrapper = styled(Container)`
  ${tw`items-center`};
`;
