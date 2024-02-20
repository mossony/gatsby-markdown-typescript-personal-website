import React from 'react';
import {useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid } from 'helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  
  return (
    <Styled.Logo to="/">
      <Styled.Image onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Img fluid={logoImage} alt={logoTitle} />
      </Styled.Image>
      {!isHovering && <Styled.Text>Boyang (Bob) Wan</Styled.Text>}
      {isHovering && <Styled.Text>This is my cat Wangcai</Styled.Text>}
    </Styled.Logo>
  );
  
  
};

export default Logo;
