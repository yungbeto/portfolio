import React from 'react';
import Link from 'gatsby-link';
import Disqus from '../Disqus/Disqus';
import Links from '../Links';
import Close from '../../pages/exButton.svg'
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;

    const homeBlock = (
        <Link className="post-single__home-button" to="/">
          <img 
            src={Close}
            alt="close"
            className="post-single__close"
          />
        </Link>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} siteMetadata={this.props.data.site.siteMetadata} />
      </div>
    );

    return (
      <div>
          <div className="post-single">
            <div className="post-single__inner">
              <header className="post-single__header">
              <h1 className="post-single__title">{post.frontmatter.title}</h1>
              {homeBlock}
              </header>
              <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="post-single__footer">
            <div className="post-single__footer-links">
              <Links data={author} />
            </div>
            {commentsBlock}
          </div>
          </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
