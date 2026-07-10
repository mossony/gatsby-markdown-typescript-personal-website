import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

const HomePageStyles = createGlobalStyle`
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
`;

const NewHome = styled.iframe`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #f5f6f8;
`;

const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <html lang="zh-CN" />
      <title>Boyang (Bob) Wan</title>
      <meta
        name="description"
        content="Boyang (Bob) Wan — Computer Science and Information Security."
      />
    </Helmet>
    <HomePageStyles />
    <NewHome
      src="/new-home/index.html"
      title="Boyang Wan personal website"
      allow="clipboard-write"
    />
  </>
);

export default IndexPage;
