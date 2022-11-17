/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import StPostCard from './styles/StPostCard';
import StAuthorInfo from './styles/StAuthorInfo';
import StContent from './styles/StContent';
import StAvatar from './styles/StAvatar';
import StName from './styles/StName';
import StPostContent from './styles/StPostContent';
import StPostPhoto from './styles/StPostPhoto';

const PostCard = ({ post }) => (
  <StPostCard>
    <StAuthorInfo>
      <StAvatar src={post.photoURL} />
      <StContent>
        {!post.authorNameMatchLevel || post.authorNameMatchLevel === 'none' ? (
          <StName>{post.authorName}</StName>
        ) : (
          <StName dangerouslySetInnerHTML={{ __html: post.authorName }} />
        )}
      </StContent>
    </StAuthorInfo>
    <br />
    <StContent>
      {!post.contentMatchLevel || post.contentMatchLevel === 'none' ? (
        <StPostContent>{post.content}</StPostContent>
      ) : (
        <StPostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      )}

      {post.photoURL && <StPostPhoto src={post.photoURL} alt="" />}
    </StContent>
  </StPostCard>
);

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
