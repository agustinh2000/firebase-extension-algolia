/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { MdSearch } from 'react-icons/md';

import { generalMessages } from 'utils/generalMessages';
import { SIZES } from 'utils/constant';
import PostInput from 'components/PostInput';
import ActionsContainer from 'components/NewPostForm/styles/ActionsContainer';
import StNewPostForm from '../NewPostForm/styles/StNewPostForm';
import Button from '../NewPostForm/styles/Button';

const SearchPostForm = ({ text, setText, handleSend }) => (
    <StNewPostForm onSubmit={handleSend}>
      <PostInput
        type="text"
        fieldName="text"
        placeholder={generalMessages.search.defaultMessage}
        size={SIZES.MEDIUM}
        icon={<MdSearch />}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <ActionsContainer>
        <Button type="submit" disabled={!text}>
          Buscar
        </Button>
      </ActionsContainer>
    </StNewPostForm>
  );

SearchPostForm.propTypes = {};

export default SearchPostForm;
