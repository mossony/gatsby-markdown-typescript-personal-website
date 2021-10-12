import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/mossony" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="../../pages/404.tsx"
          rel="noreferrer noopener"
          target="_blank"
        >
          Facebook
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/boyang-wan-17b5851b9/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
