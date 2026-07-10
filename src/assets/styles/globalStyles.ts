import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-white bg-gray-900`};  // Change to light text on a dark background
  }

  a {
    ${tw`text-indigo-300 hover:text-indigo-400`};  // Adjust link colors to be lighter
  }

  p + p {
    ${tw`mt-3`};
  }
`;
