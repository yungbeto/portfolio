import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Links from '../Links';
import './style.scss';

class Header extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        { isHomePage ? (
          <h2 className="header-title">
            <Link className="header__author-title-link" to="/">{author.name}</Link>
          </h2>
        ) :
          <h2 className="header-title">
            <Link className="header__author-title-link" to="/">{author.name}</Link>
          </h2>
        }
        <p className="header__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="header">
        <div className="header__inner">
          <div className="header__author">
            {authorBlock}
          </div>
          <div>
            <Links data={author} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
