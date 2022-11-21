import React, { useState } from 'react';

import useErrorToast from 'hooks/useErrorToast';

import { shallowEqual, useSelector } from 'react-redux';
import selectStatusOfCreatePost from 'state/selectors/posts';

import PostCard from 'components/PostCard';
import Input from 'components/Input';
import { SIZES } from 'utils/constant';
import algoliasearch from 'algoliasearch/lite';
import Text from 'components/Text';
import PostContainer from './styles/PostContainer';

const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
);

const index = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX);

const Search = () => {
  const [posts, setPosts] = useState([]);

  const [text, setText] = useState('');

  const { error } = useSelector(selectStatusOfCreatePost, shallowEqual);
  useErrorToast(error);

  const performSearch = async (value) => {
    if (value) {
      const { hits } = await index.search(value, {
        hitsPerPage: 10,
      });
      console.log({ hits });
      const searchedPosts = hits.map((hit) => {
        const { objectID: key, photoURL, _highlightResult } = hit;
        const {
          content: { value: content, matchLevel: contentMatchLevel },
          authorName: { value: authorName, matchLevel: authorNameMatchLevel },
        } = _highlightResult;
        return {
          key,
          photoURL,
          content,
          contentMatchLevel,
          authorName,
          authorNameMatchLevel,
        };
      });
      setPosts(searchedPosts);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setPosts([]);
    } else {
      performSearch(value);
    }
    setText(value);
  };

  return (
    <>
      <Input
        placeholder="Search"
        size={SIZES.LARGE}
        onChange={handleChange}
        value={text}
      />
      <PostContainer>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard post={post} />)
        ) : (
          <Text>No hay posts disponibles</Text>
        )}
      </PostContainer>
    </>
  );
};
export default Search;
