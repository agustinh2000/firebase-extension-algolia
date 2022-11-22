/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { MdOutlineDescription } from 'react-icons/md';

import AddImage from 'images/AddImage.png';

import { generalMessages } from 'utils/generalMessages';
import { SIZES } from 'utils/constant';
import { errorToast } from 'utils/toast';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import createPost from 'state/actions/post';
import { getLoggedUser } from 'state/selectors/auth';
import PostInput from 'components/PostInput';
import StNewPostForm from './styles/StNewPostForm';
import ActionsContainer from './styles/ActionsContainer';
import Image from './styles/Image';
import Button from './styles/Button';

const NewPostForm = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const { loggedUser } = useSelector(getLoggedUser, shallowEqual);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    const mbToBytes = 1048576;
    if (file.size / mbToBytes > 5) {
      errorToast('La imagen no puede pesar más de 5MB');
    } else {
      setImg(file);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(createPost(text, img, loggedUser));
    setText('');
    setImg(null);
  };

  return (
    <StNewPostForm onSubmit={handleSend}>
      <PostInput
        type="text"
        fieldName="text"
        placeholder={generalMessages.share.defaultMessage}
        size={SIZES.MEDIUM}
        icon={<MdOutlineDescription />}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <ActionsContainer>
        <input
          type="file"
          accept="image/*"
          id="file"
          onChange={(e) => handleAddImage(e)}
        />
        <label htmlFor="file">
          <Image src={AddImage} alt="Añadir foto" />
        </label>
        <Button type="submit" disabled={!text || img == null}>
          Post
        </Button>
      </ActionsContainer>
    </StNewPostForm>
  );
};

NewPostForm.propTypes = {};

export default NewPostForm;
