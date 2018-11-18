import React from 'react';
import Img from 'gatsby-image';
import './style.scss';

const CoverImage = props => (
  <header className="header">
    <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={props.cover.sizes}
    />
  </header>
);

export default CoverImage;

export const pageQuery = graphql`
  query CoverImageQuery {
    cover: imageSharp(id: { regex: "./cover.png" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
