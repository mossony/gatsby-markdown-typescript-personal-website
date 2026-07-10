import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left text-white`}; // Changed text color to white
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-indigo-300 w-full text-left`}; // Changed text color to a lighter shade
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-300 h-full w-px absolute left-0`}; // Adjusted the color to a lighter shade
  }

  &:after {
    content: '';
    ${tw`bg-teal-300 h-6 w-px absolute ml-1`}; // Adjusted the color to a lighter shade
  }
`;
