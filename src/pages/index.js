import React from 'react';
import Link from 'gatsby-link';
import background from './images/background.jpg';

const IndexPage = () => (
  <div
    style={{
      width: '100%',
      height: 'calc(100vh - 105px)',
    }}
  >
    <h1>Index</h1>
    <img
      src={background}
      style={{
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    />
  </div>
);

export default IndexPage;
