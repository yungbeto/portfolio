import React from 'react';
import Link from 'gatsby-link';
import Links from '../Links';
import Close from '../../pages/exButton.svg'
import './style.scss';

class PageTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.data.site.siteMetadata;
    const page = this.props.data.markdownRemark;

const homeBlock = (
  <Link className="post-single__home-button" to="/">
    <img 
      src={Close}
      alt="close"
      className="post-single__close"
    />
  </Link>
);

    return (
      <div>
        <div className="page">
          <div className="page__inner">
            <header className="page__header">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              {homeBlock}
            </header>
            <div className="page__body" dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>
          <div className="page__footer">
            <div className="page__footer-links">
              <Links data={author} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTemplateDetails;
