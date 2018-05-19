import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

class Post extends React.Component {
  render() {
    const { title, category, description, cover } = this.props.data.node.frontmatter;
    const { slug, categorySlug } = this.props.data.node.fields;

    return (
      <div className="post">
        <div className="post__meta">
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
          <Link to={slug}>
            <img 
            src={cover}
            alt={title}
            className="post__cover"
            />
          </Link>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <p className="post__description">{description}</p>
      </div>
    );
  }
}

export default Post;
