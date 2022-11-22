import React, { useEffect, useState } from 'react';

import NewPostForm from 'components/NewPostForm';
import useErrorToast from 'hooks/useErrorToast';

import { shallowEqual, useSelector } from 'react-redux';
import selectStatusOfCreatePost from 'state/selectors/posts';

import { collection, onSnapshot } from 'firebase/firestore';

import PostCard from 'components/PostCard';
import { db } from 'services/firebase';
import PostContainer from './styles/PostContainer';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const unsubscribe = onSnapshot(
        collection(db, 'posts'),
        (querySnapshot) => {
          const postsFetched = [];
          querySnapshot.forEach((doc) => {
            postsFetched.push({ ...doc.data(), id: doc.id });
          });
          setPosts(postsFetched);
        }
      );

      return unsubscribe;
    };
    const unsubscribe = fetchPosts();

    return () => unsubscribe;
  }, []);

  const { error } = useSelector(selectStatusOfCreatePost, shallowEqual);
  useErrorToast(error);

  return (
    <>
      <NewPostForm />
      <PostContainer>
        {posts.length > 0 && posts.map((post) => <PostCard post={post} />)}
      </PostContainer>
    </>
  );
};
export default Home;
