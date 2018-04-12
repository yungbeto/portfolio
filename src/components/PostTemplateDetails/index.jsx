import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import Img from 'gatsby-image';
import Disqus from '../Disqus/Disqus';
import Links from '../Links';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">Home</Link>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} siteMetadata={this.props.data.site.siteMetadata} />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
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
