import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: 'White',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            Rabshab
          </Link>
        </h1>
      </div>
      <div>
        <Link
          to="/journal"
          style={{
            textDecoration: 'none',
          }}
        >
          <h2>Journal</h2>
        </Link>
      </div>
      <div>
        <Link
          to="/about"
          style={{
            textDecoration: 'none',
          }}
        >
          <h2>About</h2>
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          style={{
            textDecoration: 'none',
          }}
        >
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
